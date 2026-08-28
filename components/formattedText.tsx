import { Typography } from "@/components/typography";
import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

const isElement = (domNode: DOMNode): domNode is Element =>
  domNode.type === "tag";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (!isElement(domNode)) return;

    const children = domToReact(domNode.children as DOMNode[], options);

    switch (domNode.name) {
      case "h1":
        return (
          <Typography as="h1" variant="h1" className={domNode.attribs?.class}>
            {children}
          </Typography>
        );
      case "h2":
        return (
          <Typography as="h2" variant="h2" className={domNode.attribs?.class}>
            {children}
          </Typography>
        );
      case "h3":
        return (
          <Typography as="h3" variant="h3" className={domNode.attribs?.class}>
            {children}
          </Typography>
        );
      case "p":
        return (
          <Typography as="p" variant="p" className={domNode.attribs?.class}>
            {children}
          </Typography>
        );
      case "a":
        return <Link href={domNode.attribs?.href}>{children}</Link>;
      default:
        return;
    }
  },
};

interface FormattedTextProps extends HTMLAttributes<HTMLDivElement> {
  html: string;
}

export function FormattedText({ html, ...props }: FormattedTextProps) {
  return <div {...props}>{parse(html, options)}</div>;
}
