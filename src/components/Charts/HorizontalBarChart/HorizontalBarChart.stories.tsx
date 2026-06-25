import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalBarChart } from './HorizontalBarChart';

const meta: Meta<typeof HorizontalBarChart> = {
  title: 'Charts/Horizontal Bar Chart (Bi-directional)',
  component: HorizontalBarChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof HorizontalBarChart>;

const sampleRows = [
  {
    label: 'Category with long name',
    left: [{ value: 66 }],
    right: [{ value: 55 }],
  },
  {
    label: 'Product A',
    left: [{ value: 45 }],
    right: [{ value: 72 }],
  },
  {
    label: 'Product B',
    left: [{ value: 80 }],
    right: [{ value: 30 }],
  },
  {
    label: 'Region North',
    left: [{ value: 55 }],
    right: [{ value: 48 }],
  },
  {
    label: 'Region South',
    left: [{ value: 35 }],
    right: [{ value: 65 }],
  },
];

export const Default: Story = {
  args: {
    rows: sampleRows,
  },
};

export const CustomColors: Story = {
  args: {
    rows: [
      {
        label: 'Revenue',
        left: [{ value: 40, color: '#3e9bca' }],
        right: [{ value: 60, color: '#6058b4' }],
      },
      {
        label: 'Costs',
        left: [{ value: 70, color: '#e76067' }],
        right: [{ value: 25, color: '#2d9d78' }],
      },
    ],
  },
};
