import { LibrarySelect } from "@/components/library-select";
import HtmlContent from "@/components/HtmlContent";
import SupportDownloadCards from "@/components/SupportDownloadCards";
import { Typography } from "@/components/typography";
import Image from "next/image";
import { addBasePath } from "@/lib/basePath";

export default function Home() {
  return (
    <div className="h-sm:py-[2.5vh] h-md:py-[10vh] h-lg:py-[15vh] h-xl:py-[20vh] flex min-w-0 flex-col items-center gap-8 py-[5vh]">
      <div className="mx-auto grid h-fit w-full max-w-5xl min-w-0 gap-6 space-y-6 pb-6 text-center md:gap-12 md:pb-8">
        <Typography as="h1" variant="h1" className="inline sm:block">
          eReolen hedder nu{" "}
          <Image
            src={addBasePath("/Biblo-Name-green.png")}
            alt="Biblo"
            width={202}
            height={72}
            className="inline-block h-[0.85em] w-auto translate-x-[7px] translate-y-[-7px]"
            priority
          />
        </Typography>
        <HtmlContent src="/content/main.html" />
        <div className="mx-auto w-full space-y-4">
          <Typography
            as="h2"
            variant="h3"
            className="mt-6 mb-4 md:mt-0 md:mb-8"
          >
            Vælg din kommune for at gå til dit biblioteks hjemmeside
          </Typography>
          <LibrarySelect />
        </div>
      </div>
      <SupportDownloadCards />
    </div>
  );
}
