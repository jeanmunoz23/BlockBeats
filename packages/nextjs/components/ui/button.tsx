import { FC } from "react";
import clsx from "clsx";

type ButtonSize = "xsmall" | "small" | "medium";
type ButtonVariant = "active" | "primary" | "secondary";

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: any;
}

const buttonSizeClasses: Record<ButtonSize, string> = {
  xsmall: "px-[16px] py-[2px] text-[16px]",
  small: "py-1 px-2",
  medium: "px-6 py-3",
};

const buttonVariantClasses: Record<ButtonVariant, string> = {
  active: "flex items-center justify-between text-black bg-white border-[1px] border-white rounded-3xl mr-2",
  primary: "flex items-center justify-between text-white border-[1px] border-white rounded-3xl mr-2",
  secondary: "flex items-center justify-between bg-gradient-to-r from-green to-purple rounded-3xl mr-2",
};

export const Button: FC<ButtonProps> = ({ children, size = "medium", variant = "primary" }) => (
  <button className={clsx(buttonSizeClasses[size], buttonVariantClasses[variant])}>{children}</button>
);
