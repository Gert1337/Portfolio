import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import MenuBar from './MenuBar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: MenuBar,
  parameters: {
    layout: 'centered',
      nextjs: {
         appDirectory: true,
  },
  },
  tags: ['autodocs'],
  argTypes: {
  },

  args: { onClick: fn() },
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
};

