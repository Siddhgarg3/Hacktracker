import Link from "next/link";

export default function SavedHackathons(){
    return (
        <section aria-labelledby="saved-heading">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase">Your shortlist</p>
            <h1 id="saved-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Saved Hackathons</h1>
            <p className="mt-3 text-base leading-7 text-slate-600">A place for the events you want to come back to.</p>
            <div className="mt-8 rounded-2xl border border-border bg-surface px-5 py-14 text-center shadow-sm sm:py-20">
                <div aria-hidden="true" className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-primary"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-7"><path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16l-6-4-6 4V5Z"/></svg></div>
                <h2 className="text-xl font-semibold tracking-tight">Your future shortlist starts here</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">Your saved events will appear here. Saving isn’t available yet, but you can explore the discovery page in the meantime.</p>
                <Link href="/" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gray-100 px-5 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white">Discover Hackathons <span aria-hidden="true">→</span></Link>
            </div>
        </section>
    )
}
