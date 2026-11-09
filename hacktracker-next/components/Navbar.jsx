import Link from "next/link"
export default function Navbar(){
    return(
        <header className="border-b border-border bg-surface">
            <nav className="navbar mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-4 sm:px-6 lg:px-8" id="navbar" aria-label="Main navigation">
                <Link href="/" className="inline-flex min-h-11 items-center gap-2.5 rounded-md text-lg font-bold tracking-tight text-foreground">
                    <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-white">H<span className="text-cyan-200">/</span></span>
                    HackTracker
                </Link>
                <ul className="flex flex-wrap items-center gap-1 text-sm font-medium sm:gap-2">
                    <li><Link href="/" className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-black transition-colors duration-150 hover:bg-gray-100 focus-visible:bg-gray-100">Discover</Link></li>
                    <li><Link href="/saved" className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-black transition-colors duration-150 hover:bg-gray-100 focus-visible:bg-gray-100">Saved Hackathons</Link></li>
                </ul>
            </nav>
        </header>
    )
}
