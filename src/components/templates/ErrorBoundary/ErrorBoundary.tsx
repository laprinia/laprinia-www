import { useState, useEffect, type ReactNode } from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import Footer from "../../v2/Footer/Footer";
import ErrorState from "../../v2/ErrorState/ErrorState";
import { navItems } from "../../../consts";

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error: Error) => {
    console.error("Error captured by ErrorBoundary:", error);
    setHasError(true);
  };

  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      handleError(event.reason);
    };

    const handleErrorEvent = (event: Event) => {
      const errorEvent = event as ErrorEvent;
      handleError(errorEvent.error);
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleErrorEvent);

    return () => {
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection,
      );
      window.removeEventListener("error", handleErrorEvent);
    };
  }, []);

  if (hasError) {
    return (
      <>
        <NavBar items={navItems} highlightedIndex={0} variant="highlight" />
        <ErrorState
          title="something went"
          highlight="sideways"
          message="That is on my end, not yours. Reloading usually sorts it out."
        />
        <Footer />
      </>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
