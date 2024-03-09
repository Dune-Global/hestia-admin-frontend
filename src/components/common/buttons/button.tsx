import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/shad-utils";
import { Loader2, ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-[16px] font-light ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/80 focus-visible:ring-offset-1 ",
  {
    variants: {
      variant: {
        default: "bg-peach-700 text-gray-0 hover:opacity-80",
        fillBlack: "bg-gray-800 text-gray-0 hover:opacity-80",
        outline:
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
        icon: "bg-peach-700 text-gray-0 hover:opacity-80 rounded-full p-[6px]",
      },
      isDisabled: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-8 text-lg",
        icon: "h-10 w-10",
        sicon: "h-8 w-8",
        full: "h-10 px-4 py-2 w-full",
        freeSize: "p-2 w-fit",
        freeIcon: "p-1 w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isDisabled: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  arrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      arrow = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, isDisabled: disabled, className })
        )}
        ref={ref}
        {...props}
        disabled={loading || disabled}>
        {loading ? (
          <>
            {children}
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            {children}
            {arrow && <ArrowRight className="ml-2 h-4 w-4" />}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
