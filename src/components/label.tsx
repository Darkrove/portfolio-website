import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

interface LabelPrpops
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof labelVariants> {}

export const labelVariants = cva(
  "dark:text-zinc-200 text-zinc-900 font-bold leading-tight tracking-tighter capitalize m-0",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
        lg: "text-5xl md:text-6xl ld:text-7xl",
        md: "text-3xl md:text-4xl lg:text-5xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Label = React.forwardRef<HTMLHeadingElement, LabelPrpops>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(labelVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

Label.displayName = "Label";

export default Label;
