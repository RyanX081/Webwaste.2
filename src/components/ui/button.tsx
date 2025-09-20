import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  variant?: ButtonVariant;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 disabled:pointer-events-none disabled:opacity-50';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 hover:shadow-emerald-400/40',
  secondary: 'bg-white text-slate-900 border border-slate-200 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md',
  ghost: 'bg-transparent text-white hover:text-emerald-200 hover:bg-white/10'
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
