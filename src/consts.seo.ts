import { githubLink, linkedinLink } from "./consts";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://laprinia.online";

export const siteName = "Lavinia Dumitrenco";

export const personName = "Lavinia Dumitrenco";

export const personJobTitle = "Technical Product Designer";

export const personLocality = "Bucharest";

export const personCountry = "Romania";

export const personSameAs = [linkedinLink, githubLink];

export const personDescription =
  "Technical Product Designer in Bucharest. Five years of user research, interaction design and design systems, shipped into production.";

export const defaultOgImage = "/profile_ie7vo5";

export const absoluteUrl = (path: string): string =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
