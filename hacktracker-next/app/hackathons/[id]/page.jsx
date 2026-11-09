import { hackathons } from "../../../data/hackathons";
import { notFound } from "next/navigation";
import { formatDeadline } from "../../../lib/deadlines";
import Link from "next/link";
export default async function HackathonDetails({params}){
    const { id: idofpage } = await params;
    const hackathonreference = hackathons.find(({id}) => id === Number(idofpage))
    if (hackathonreference === undefined) {
        notFound();
    }
    return(
        <div>
            <Link href="/" className="mb-7 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-primary focus-visible:text-primary"><span aria-hidden="true">←</span> Back to Discover</Link>
            <article className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                <header className="border-b border-border px-5 py-7 sm:p-9">
                    <div className="mb-5 flex flex-wrap gap-2">
                        <span className="rounded-md border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-800">{hackathonreference.format === "in-person" ? "In Person" : hackathonreference.format === "online" ? "Online" : "Hybrid"}</span>
                        <span className={`rounded-md border px-2.5 py-1 text-xs font-medium ${hackathonreference.beginnerFriendly ? "border-emerald-100 bg-emerald-50 text-emerald-800" : "border-amber-100 bg-amber-50 text-amber-800"}`}>{hackathonreference.beginnerFriendly ? "Beginner Friendly" : "Prior Experience Recommended"}</span>
                    </div>
                    <h1 className="max-w-3xl wrap-anywhere text-3xl leading-tight font-bold tracking-tight sm:text-4xl">{hackathonreference.name}</h1>
                    <p className="mt-4 text-xs leading-5 text-secondary">Development sample · Event information has not been verified.</p>
                </header>

                <div className="grid gap-8 p-5 sm:p-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
                    <div className="min-w-0">
                        <section aria-labelledby="event-information">
                            <h2 id="event-information" className="text-lg font-semibold tracking-tight">Event information</h2>
                            <dl className="mt-5 divide-y divide-border">
                                <div className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-5"><dt className="text-sm text-secondary">Organizer</dt><dd className="wrap-anywhere text-sm font-medium text-slate-800">{hackathonreference.organizer}</dd></div>
                                <div className="grid gap-1 py-4 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-5"><dt className="text-sm text-secondary">Location</dt><dd className="wrap-anywhere text-sm font-medium text-slate-800">{hackathonreference.location}</dd></div>
                                <div className="grid gap-1 py-4 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-5"><dt className="text-sm text-secondary">Eligibility</dt><dd className="wrap-anywhere text-sm leading-6 font-medium text-slate-800">{hackathonreference.eligibilityDetails}</dd></div>
                            </dl>
                        </section>
                        <section aria-labelledby="about-event" className="mt-8 border-t border-border pt-7">
                            <h2 id="about-event" className="text-lg font-semibold tracking-tight">About this event</h2>
                            <p className="mt-3 wrap-anywhere text-base leading-8 whitespace-pre-line text-slate-600">{hackathonreference.description}</p>
                        </section>
                    </div>

                    <aside aria-label="Deadline and registration" className="min-w-0 self-start rounded-xl border border-border bg-background p-5 sm:p-6">
                        <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-indigo-100 bg-white text-primary" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-5"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4m8-4v4M4 11h16"/></svg></div>
                        <h2 className="text-xs font-semibold tracking-wide text-secondary uppercase">Registration deadline</h2>
                        <p className="mt-2 wrap-anywhere text-lg leading-7 font-semibold">{formatDeadline(hackathonreference.deadline)}</p>
                        <div className="mt-6 border-t border-border pt-5">
                            {hackathonreference.registrationUrl ? (
                                <a href={hackathonreference.registrationUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-150 hover:bg-primary-hover focus-visible:bg-primary-hover">Register on organizer website <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
                            ) : (
                                <p className="rounded-lg border border-border bg-white px-4 py-3 text-sm leading-6 text-secondary">Registration link unavailable</p>
                            )}
                        </div>
                    </aside>
                </div>
            </article>
        </div>
    )
}
