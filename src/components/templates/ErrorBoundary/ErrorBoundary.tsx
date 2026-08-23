import { useState, useEffect, type ReactNode } from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import Footer from "../../v2/Footer/Footer";
import ErrorState from "../../v2/ErrorState/ErrorState";
import { navItems } from "../../../consts";

const describe = (value: unknown): string => {
  if (value instanceof Error) return `${value.name}: ${value.message}`;
  return String(value);
};

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  const [detail, setDetail] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const debugging = new URLSearchParams(window.location.search).has("debug");

    const report = (value: unknown) => {
      console.error("Error captured by ErrorBoundary:", value);
      setDetail(debugging ? describe(value) : null);
      setHasError(true);
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      if (!(event.reason instanceof Error)) return;
      report(event.reason);
    };

    const onError = (event: ErrorEvent) => {
      if (event.target && event.target !== window) return;
      if (!event.error) return;
      report(event.error);
    };

    window.addEventListener("unhandledrejection", onRejection);
    window.addEventListener("error", onError);

    return () => {
      window.removeEventListener("unhandledrejection", onRejection);
      window.removeEventListener("error", onError);
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
          detail={detail}
        />
        <Footer />
      </>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
