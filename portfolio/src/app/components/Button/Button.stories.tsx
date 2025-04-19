import type { Meta, StoryObj } from '@storybook/react';

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