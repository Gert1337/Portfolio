import type { Meta, StoryObj } from '@storybook/react';

import {Button} from './Button';

const meta: Meta<typeof Button> = {
	component: Button,
	args: {
		children: 'Click me', // 👈 Default text shown for the button
	},
  tags: ['autodocs'],
	argTypes: {
    variant: {
      control: "select"
    },
		children: {
			control: 'text', // 👈 Allows editing in the Storybook controls panel
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outlined: Story = {args:{variant:'outlined'}};

export const Critical: Story = {
  args: {
    variant: "critical"
  }
};