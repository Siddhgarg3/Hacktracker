import Link from "next/link"
import { formatDeadline } from "../lib/deadlines";
export default function HackathonCard({hackathon}){
    return (
        <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md focus-within:-translate-y-0.5 focus-within:border-gray-400 focus-within:shadow-md sm:p-6">
            <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-md border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-800">{hackathon.format === "in-person" ? "In Person" : hackathon.format === "online" ? "Online" : "Hybrid"}</span>
            </div>
            <h3 className="wrap-anywhere text-xl leading-7 font-semibold tracking-tight text-foreground">{hackathon.name}</h3>
            <div className="mt-5 rounded-lg bg-background p-3.5">
                <p className="mb-1 flex items-center gap-2 text-xs font-medium text-secondary">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4 shrink-0"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4m8-4v4M4 11h16"/></svg>
                    Registration deadline
                </p>
                <p className="wrap-anywhere text-sm leading-6 font-semibold text-slate-800">{formatDeadline(hackathon.deadline)}</p>
            </div>
            <div className="mt-4 mb-6">
                <span className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs leading-5 font-medium ${hackathon.beginnerFriendly ? "border-emerald-100 bg-emerald-50 text-emerald-800" : "border-amber-100 bg-amber-50 text-amber-800"}`}>
                    <span aria-hidden="true" className={`size-1.5 shrink-0 rounded-full ${hackathon.beginnerFriendly ? "bg-success" : "bg-warning"}`} />
                    {hackathon.beginnerFriendly ? "Beginner Friendly" : "Prior Experience Recommended"}
                </span>
            </div>
            <Link href={`/hackathons/${hackathon.id}`} aria-label={`View details for ${hackathon.name}`} className="mt-auto inline-flex min-h-11 items-center justify-between gap-3 rounded-lg border border-border bg-gray-100 px-4 py-2.5 text-sm font-semibold text-black transition-colors duration-150 hover:border-black hover:bg-black hover:text-white focus-visible:border-black focus-visible:bg-black focus-visible:text-white">
                View Details <span aria-hidden="true">→</span>
            </Link>
        </article>
    )
}
