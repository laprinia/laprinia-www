import { ArrowUpRight } from "lucide-react";
import { githubLink, linkedinLink, navItems } from "../../consts";
import {
  FooterShell,
  Brand,
  Wink,
  WinkEye,
  Wordmark,
  Note,
  Links,
  FooterLink,
} from "./Footer.styles";

const externalLinks = [
  { label: "linkedin", href: linkedinLink },
  { label: "github", href: githubLink },
];

const Footer = () => (
  <FooterShell>
    <Brand>
      <Wink role="img" aria-label="winking face">
        <WinkEye aria-hidden="true" />
      </Wink>
      <Wordmark>laprinia</Wordmark>
      <Note>© {new Date().getFullYear()} · bucharest, romania</Note>
    </Brand>

    <Links>
      {navItems.map((item) => (
        <li key={item.href}>
          <FooterLink href={item.href}>{item.label}</FooterLink>
        </li>
      ))}
      {externalLinks.map((link) => (
        <li key={link.href}>
          <FooterLink
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{link.label}</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </FooterLink>
        </li>
      ))}
    </Links>
  </FooterShell>
);

export default Footer;
