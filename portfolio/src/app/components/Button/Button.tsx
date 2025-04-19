import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'outlined' | 'critical';
    size?: 'sm' | 'md' | 'lg';
};

export const Button = ({
	children,
	variant = 'primary',
    size = 'md',
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			className={clsx(
				'px-4 py-2 rounded font-medium transition-colors duration-200',
				{
					'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
					'border border-blue-600 text-blue-600 hover:bg-blue-50': variant === 'outlined',
					'bg-red-600 text-white hover:bg-red-700': variant === 'critical',
				},
                {
					'px-3 py-1 text-sm': size === 'sm',
					'px-4 py-2 text-base': size === 'md',
					'px-6 py-3 text-lg': size === 'lg',
				},
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
};