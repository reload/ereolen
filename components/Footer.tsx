import { contactFormLink, footerLinks } from "@/content/links";
import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";
import { Typography as Typo } from "@/components/typography";
import { Link } from "@/components/link";

const Footer = () => {
  return (
    <footer className="border-t-2 p-4 py-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
        <section aria-labelledby="nyttig-information">
          <Typo
            as="h3"
            variant="h4"
            className="mb-4 text-xl font-semibold"
            id="nyttig-information"
          >
            Nyttig information
          </Typo>

          <nav>
            <ul className="space-y-1">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link target="_blank" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section aria-labelledby="kontakt-supporten">
          <Typo
            as="h3"
            variant="h4"
            className="mb-4 text-xl font-semibold"
            id="kontakt-supporten"
          >
            Kontakt supporten
          </Typo>
          <Typo as="p" variant="small" className="mb-2">
            Alle hverdage kl. 13.00-17.00 <br />
            Fredag kl. 11.00-15.00
          </Typo>
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

        <div className="mx-auto mt-12 space-y-6 self-center justify-self-end md:col-span-2 md:col-start-3 md:mx-0 md:mt-0">
          <Image
            className="mx-auto"
            src={addBasePath("/ddf_logo.png")}
            <Typography as="p" variant="small">
              Biblo er en del af Det Digitale Folkebibliotek
            </Typography>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
