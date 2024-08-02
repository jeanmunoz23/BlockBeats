import { FC } from "react";
import clsx from "clsx";

type ButtonSize = "small" | "medium";
type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: any;
}

const buttonSizeClasses: Record<ButtonSize, string> = {
  small: "py-1 px-2",
  medium: "py-2 px-4",
};

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "flex items-center justify-between text-white border-[1px] border-white rounded-3xl px-6 py-3",
  secondary: "flex items-center justify-between bg-gradient-to-r from-green to-purple rounded-3xl px-6 py-3",
};

export const Button: FC<ButtonProps> = ({ children, size = "small", variant = "primary" }) => (
  <button className={clsx(buttonSizeClasses[size], buttonVariantClasses[variant])}>{children}</button>
);
