import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-typo-heading-1",
      h2: "text-typo-heading-2",
      h3: "text-typo-heading-3",
      h4: "text-typo-heading-4",
      p: "text-typo-body-lg",
      small: "text-typo-body-sm",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ as: Tag = "p", variant, className, children, ...props }, ref) => {
    return (
      <Tag
        className={cn(typographyVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Typography.displayName = "Typography";

export { typographyVariants };
