import type { Meta, StoryObj } from '@storybook/react-vite';

const TailwindColors = () => (
    <div className="space-y-4" >
        <h2 className="text-2xl font-bold mb-4" > Cores do Tailwind </h2>

        < div className="flex gap-2 flex-wrap" >
            {
                ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'].map((color) => (
                    <div key={color} className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center text-white font-bold`} >
                        {color.split('-')[1]}
                    </div>
                ))}
        </div>
    </div>
);

const TailwindTypography = () => (
    <div className="space-y-4" >
        <h2 className="text-2xl font-bold mb-4" > Tipografia </h2>

        < h1 className="text-4xl font-bold" > Heading 1 </h1>
        < h2 className="text-3xl font-semibold" > Heading 2 </h2>
        < h3 className="text-2xl font-medium" > Heading 3 </h3>
        < p className="text-lg" > Texto paragraph grande </p>
        < p className="text-base" > Texto paragraph normal </p>
        < p className="text-sm text-gray-600" > Texto small com cor cinza </p>
    </div>
);

const TailwindButtons = () => {
    return (

        <div className="space-y-4" >
            <h2 className="text-2xl font-bold mb-4" > Botões com Tailwind </h2>

            < div className="flex gap-4 flex-wrap" >
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" >
                    Primary
                </button>
                < button className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition-colors" >
                    Secondary
                </button>
                < button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors" >
                    Rounded
                </button>
            </div>
        </div>)
};

const meta = {
    title: 'Tailwind/Showcase',
    parameters: {
        layout: 'padded',
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
    render: TailwindColors,
};

export const Typography: Story = {
    render: TailwindTypography,
};

export const Buttons: Story = {
    render: TailwindButtons,
};