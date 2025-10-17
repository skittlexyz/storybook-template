import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button Primary',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Button Secondary',
        variant: 'secondary',
    },
};

export const Large: Story = {
    args: {
        children: 'Button Large',
        size: 'lg',
    },
};

export const Small: Story = {
    args: {
        children: 'Button Small',
        size: 'sm',
    },
};