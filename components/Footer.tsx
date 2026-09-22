import { contactFormLink, footerLinks } from "@/content/links";
import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import { Typography } from "@/components/typography";
import { Link } from "@/components/link";

const Footer = () => {
  return (
    <footer className="p-4 sm:py-10 md:py-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        <section aria-labelledby="nyttig-information">
          <Typography
            as="h3"
            variant="h4"
            className="mb-4"
            id="nyttig-information"
          >
            Nyttig information
          </Typography>

          <nav>
            <ul className="space-y-1">
              {footerLinks.map((link, index) => (
                <li key={link.href + index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section aria-labelledby="kontakt-supporten">
          <Typography
            as="h3"
            variant="h4"
            className="mb-4"
            id="kontakt-supporten"
          >
            Kontakt supporten
          </Typography>
          <Typography as="p" variant="small" className="mb-2">
            Alle hverdage kl. 13.00-17.00 <br />
            Fredag kl. 11.00-15.00
          </Typography>
          <Link className="mb-2 block" href="tel:70263636">
            Tlf: 7026 3636
          </Link>
          <Typography as="p" variant="small" className="mb-2">
            For henvendelser uden for åbningstiden <br />
            <Link href={contactFormLink} className="underline">
              benyt venligst vores kontaktformular her
            </Link>
            .
          </Typography>
        </section>

        <div className="space-y-4 justify-self-center md:justify-self-end">
          <Link href="https://detdigitalefolkebibliotek.dk" target="_blank">
            <Image
              src={addBasePath("/ddf_logo.png")}
              alt="Det Digitale Folkebiblioteks Logo"
              width={280}
              height={70}
              className="h-auto w-full max-w-[240px]"
            />
            <Typography as="p" variant="small">
              Biblo er en del af Det Digitale Folkebibliotek
            </Typography>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
