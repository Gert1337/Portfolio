import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'outlined' | 'critical';
};

export const Button = ({
	children,
	variant = 'primary',
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
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
};