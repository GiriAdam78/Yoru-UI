export default function Navbar(){
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 dark:border-border">
            <div className="flex h-16 items-center justify-between gap-4 container">
                <div className="flex lg:hidden items-center gap-1.5">
                    <button>M</button>
                    <a className="flex items-center gap-2">🌙</a>
                </div>
                <div className="hidden lg:flex items-center gap-3.5">
                    <a className="mr-10 flex items-center gap-2" href="/">🌙
                        <p className="font-semibold">Yoru UI</p>
                    </a>

                    <div className="items-center justify-center mr-4 hidden lg:flex">
                        <nav className="flex items-center gap-4 text-sm font-medium xl:gap-6">
                            <a href="/" className="relative transition-color hover:text-foreground/80 inline-flex items-center gap-1 text-foreground font-sans">Components</a>
                            <a href="/" className="relative transition-color hover:text-foreground/80 inline-flex items-center gap-1 text-foreground font-sans">Docs</a>
                        </nav>
                    </div>
                </div>

                <div className="flex items-center gap-3 justify-end">
                    <div className="hidden md:block">
                      <button className="inline-flex items-center px-3 h-9 border border-border rounded gap-3 cursor-pointer md:w-48 lg:w-56">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search w-3 h-3"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                        <span className="text-gray-400 text-sm font-sans">Search</span>
                      </button>
                    </div>
                </div>
            </div>
        </header>
    )
}