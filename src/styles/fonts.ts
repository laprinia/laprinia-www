import { Roboto_Flex, Raleway } from "next/font/google";

export const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto-flex",
});

export const raleway = Raleway({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-raleway",
});
