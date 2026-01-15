export default function Banner(){
    return (
        <div className="container">
            <div className="flex items-center justify-center py-10 lg:py-2 lg:h-[500px] mb-5">
                <div className="flex items-center flex-col justify-between gap-6">
                    <h1 className="text-2xl lg:text-[48px] font-bold text-center font-sans">Beautifully UI Components Made With Base UI and Tailwindcss</h1>
                    <div className="text-center text-l max-w-2xl font-sans">
                        Open-source collection of UI components and animated effects built with <strong>React</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}