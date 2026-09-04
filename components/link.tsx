import NextLink from "next/link";
import { typographyVariants } from "@/components/typography";
import { cn } from "@/lib/utils";

type AppLinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export function Link({
  href,
  children,
  className,
  target = "_blank",
  ...props
}: AppLinkProps) {
  return (
    <NextLink
      href={href}
      target={target}
      className={cn(
        typographyVariants({ variant: "small" }),
        "hover:underline",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
