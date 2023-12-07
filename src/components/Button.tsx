import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva("p-2.5", {
  variants: {
    variant: {
      primary: [
        "bg-primary-default",
        "text-primary-text",
        "hover:bg-primary-hover",
        "hover:text-primary-neutral",
      ],
      ghost: ["text-ghost-text", "hover:bg-ghost-hover"],
    },
    btnType: {
      button: ["rounded"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
      ],
    },
    defaultVariants: {
      variant: "primary",
      btnType: "button",
    },
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

const Button = ({
  variant = "primary",
  btnType = "button",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, btnType }), className)}
    />
  );
};
export default Button;
