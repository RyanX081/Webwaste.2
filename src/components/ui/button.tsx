import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  variant?: ButtonVariant;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 disabled:pointer-events-none disabled:opacity-50 flow-ux__cta';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-emerald-600 text-white shadow-sm shadow-emerald-200/60 hover:bg-emerald-500 focus-visible:outline-emerald-600 flow-ux__cta--primary',
  secondary:
    'bg-white text-slate-900 border border-slate-200 hover:border-emerald-400 hover:text-emerald-700 focus-visible:outline-slate-400 flow-ux__cta--secondary',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:outline-slate-400 flow-ux__cta--tertiary'
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', asChild = false, className, children, ...props }, ref) => {
    const classNames = cx(baseStyles, variantStyles[variant], className);

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cx((children.props as { className?: string }).className, classNames),
        ref,
        ...props
      });
    }

    return (
      <button ref={ref} className={classNames} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
