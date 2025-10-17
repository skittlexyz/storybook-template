function App() {
    const copy = (textToCopy: string) => navigator.clipboard.writeText(textToCopy);

    return (
        <div className="max-w-[720px] h-full flex overflow-x-hidden flex-col py-8 gap-2">
            <h1 className="text-3xl text-pink-500 font-semibold">📕 Storybook UI Library Template</h1>
            <hr className="border-neutral-600 my-2" />
            <h3 className="text-xl">🚀 Features</h3>
            <ul className="flex flex-col gap-1">
                <li>⚛️ React + TypeScript — build strongly typed, scalable components</li>
                <li>⚡ Vite — ultra-fast development and build tool</li>
                <li>🎨 Tailwind CSS — utility-first styling for rapid UI development</li>
                <li>📘 Storybook — isolated component development and documentation</li>
                <li>🧱 Component-driven architecture — build consistent, reusable interfaces</li>
            </ul>
            <hr className="border-neutral-600 my-2" />
            <h3 className="text-xl">🔧 Getting Started</h3>
            <p>To see this page run:</p>
            <pre className="rounded-md font-mono p-4 bg-neutral-900 flex justify-between items-center">
                npm run dev
                <button onClick={() => copy("npm run dev")} className="bg-neutral-800 hover:bg-neutral-700 cursor-pointer py-1 px-2 rounded-sm">Copy</button>
            </pre>
            <p>To see the storybook run:</p>
            <pre className="rounded-md font-mono p-4 bg-neutral-900 flex justify-between items-center">
                npm run storybook
                <button onClick={() => copy("npm run storybook")} className="bg-neutral-800 hover:bg-neutral-700 cursor-pointer py-1 px-2 rounded-sm">Copy</button>
            </pre>
            <hr className="border-neutral-600 my-2" />
            <div className="w-full flex justify-center">
                <a href="https://github.com/skittlexyz" target="_blank" className="text-sm text-neutral-500">Visit my Github profile!</a>
            </div>
        </div>
    )
}

export default App