import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "overflow-hidden inline-flex items-center justify-center cursor-pointer text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-lg",
  {
    variants: {
      variant: {
        default:
          "bg-violet-600 border-solid border-0 text-white hover:bg-violet-600/80 active:bg-violet-700",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border hover:bg-violet-950/30 bg-transparent hover:text-violet-400 text-violet-500 border-violet-500 hover:border-violet-400",
        secondary: "bg-white text-black hover:bg-violet-200",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-2 rounded-3xl",
        sm: "h-9 rounded-3xl px-3",
        lg: "h-12 rounded-3xl px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export { buttonVariants };
