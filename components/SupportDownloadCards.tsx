import { aboutBibloLink } from "@/content/links";
import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";
import { Typography } from "@/components/typography";
import { Link } from "@/components/link";
import { cn } from "@/lib/utils";

type CardWrapperProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

const CardWrapper = ({ href, className, children }: CardWrapperProps) => {
  const classes = cn(
    "flex min-h-[120px] items-center justify-center rounded-xl p-4",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
};

const BibloMark = () => (
  <Image
    src={addBasePath("/Biblo-Logo-dark-green.png")}
    alt=""
    width={140}
    height={50}
    className="h-20 w-auto"
  />
);

const SupportDownloadCards = () => {
  return (
    <section className="mt-auto grid w-full gap-4 md:grid-cols-2">
      <CardWrapper
        href={aboutBibloLink}
        className="bg-card-primary text-card-primary-foreground hover:no-underline"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <BibloMark />
          <Typography as="p" variant="p" className="!font-bold">
            Læs mere om Biblo
          </Typography>
        </div>
      </CardWrapper>

      <CardWrapper className="bg-card-secondary text-card-secondary-foreground">
        <div className="flex items-center gap-4 sm:gap-6">
          <BibloMark />
          <div className="flex flex-col items-center justify-center gap-3 sm:items-start">
            <Typography
              as="p"
              variant="p"
              className="w-full !font-bold sm:text-center"
            >
              Download Biblo-appen
            </Typography>
            <div className="flex items-center justify-center gap-3">
              <Link href="https://play.google.com/store/apps/details?id=dk.redia.eReolen">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={addBasePath("/google_play.svg")}
                  alt="Google Play"
                  className="h-[20%] w-auto sm:h-10"
                />
              </Link>
              <Link href="https://apps.apple.com/dk/app/ereolen/id1438218229?l=da">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={addBasePath("/app_store.svg")}
                  alt="App Store"
                  className="h-[20%] w-auto sm:h-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </CardWrapper>
    </section>
  );
};

export default SupportDownloadCards;
