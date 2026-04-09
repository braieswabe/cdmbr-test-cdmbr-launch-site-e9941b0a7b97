import Link from "next/link";
import { cn } from "@/lib/cn";

type CommonButtonProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButtonProps = CommonButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = CommonButtonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variantStyles = {
  primary:
    "bg-[color:var(--color-primary)] text-white shadow-sm hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md",
  secondary:
    "bg-[color:var(--color-secondary)] text-white shadow-sm hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-md",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-950",
} as const;

export function Button(props: ButtonProps) {
  const { className, children } = props;
  const variant = "variant" in props ? props.variant ?? "primary" : "primary";
  const classes = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
