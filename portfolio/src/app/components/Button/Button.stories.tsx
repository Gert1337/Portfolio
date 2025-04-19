import type { Meta, StoryObj } from '@storybook/react';
import { FiTrash, FiArrowRight } from 'react-icons/fi';

import {Button} from './Button';

const meta: Meta<typeof Button> = {
	component: Button,
	args: {
		children: 'Click me', // 👈 Default text shown for the button
    variant: 'primary',
    size: 'md',
	},
  tags: ['autodocs'],
	argTypes: {
    variant: {
      control: "select"
    },
    size: {
			control: "select",
		},
		children: {
			control: 'text', // 👈 Allows editing in the Storybook controls panel
		},
    startIcon: { control: false },
		endIcon: { control: false },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySmall: Story = {
  args: {
    children: "Click me",
    variant: "primary",
    size: "sm"
  }
};
export const PrimaryMedium: Story = {  
  args: {
  children: "Click me",
  variant: "primary",
  size: "md"
}};



export const PrimaryLarge: Story = {
  args: {
    children: "Click me",
    variant: "primary",
    size: "lg"
  }
};

export const Outlined: Story = {args:{variant:'outlined'}};

export const Critical: Story = {
  args: {
    variant: "critical"
  }
};

export const WithStartIcon: Story = {
	args: {
		children: 'Delete',
		startIcon: <FiTrash />,
		variant: 'critical',
	},
};

export const WithEndIcon: Story = {
	args: {
		children: 'Continue',
		endIcon: <FiArrowRight />,
		variant: 'primary',
	},
};

export const WithBothIcons: Story = {
	args: {
		children: 'Next step',
		startIcon: <FiTrash />,
		endIcon: <FiArrowRight />,
		variant: 'outlined',
	},
};