import Link from "next/link"
export default function NotFound(){
    return(
        <section className="mx-auto my-8 max-w-2xl rounded-2xl border border-border bg-surface px-5 py-14 text-center shadow-sm sm:my-12 sm:p-16">
            <span className="mb-5 inline-flex rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-1.5 font-mono text-sm font-semibold text-primary">404</span>
            <h1 className="text-3xl font-bold tracking-tight">Hackathon not found</h1>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-600">We couldn’t find an event at this address. Head back to Discover to explore the available listings.</p>
            <Link href="/" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-primary-hover focus-visible:bg-primary-hover"><span aria-hidden="true">←</span> Back to Discover</Link>
        </section>
    )
}
