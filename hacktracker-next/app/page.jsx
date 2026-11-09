"use client";
import { hackathons } from "../data/hackathons"
import { useState } from "react";
import HackathonCard from "../components/HackathonCard"
import { compareDeadlines } from "../lib/deadlines";
export default function Home() {
    const [query, setQuery] = useState("");
    const [format, setFormat] = useState("all");
    const [beginneronly, setBeginnerOnly] = useState(false)
    const hack_name = (element) => {return element.name.toLowerCase().includes(query.toLowerCase())};
    const formats = (element) => {return format === "all" || element.format === format};
    const introductory = (element) => {return !beginneronly || element.beginnerFriendly};
    const sortedHackathons = [...hackathons].sort(compareDeadlines);
    const filteredHackathons = sortedHackathons.filter(element => hack_name(element) && formats(element) && introductory(element));
    function updateQuery(event){
      setQuery(event.target.value);
    }
    function updateFormat(event){
      setFormat(event.target.value);
    }
    function updateBeginner(event){
      setBeginnerOnly(event.target.checked);
    }
    return (<>
      <section aria-labelledby="discover-heading" className="mb-8">
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-black uppercase">Build something that matters</p>
        <h1 id="discover-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Discover Hackathons</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">Find upcoming events that match your interests, experience and preferred format.</p>
        <p className="mt-3 inline-flex items-center gap-2 text-xs text-secondary"><span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />Sample listings for development. Event details are not verified.</p>
      </section>

      <section aria-label="Search and filter hackathons" className="rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-5">
        <div className="grid items-end gap-5 md:grid-cols-[minmax(0,1fr)_180px] lg:grid-cols-[minmax(0,1fr)_180px_auto]">
          <div className="min-w-0">
            <label htmlFor="searchbar" className="mb-2 block text-sm font-semibold">Search hackathons</label>
            <div className="relative">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="pointer-events-none absolute top-3.5 left-3.5 size-5 text-secondary"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg>
              <input id="searchbar" value={query} onChange={updateQuery} placeholder="Search by hackathon name…" className="h-12 w-full min-w-0 rounded-lg border border-slate-300 bg-white pr-3 pl-11 text-base text-foreground transition-colors duration-150 placeholder:text-secondary hover:border-slate-400 focus:border-primary"/>
            </div>
          </div>
          <div>
            <label htmlFor="dropdownmenu" className="mb-2 block text-sm font-semibold">Format</label>
            <select value={format} onChange={updateFormat} id="dropdownmenu" className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base text-foreground transition-colors duration-150 hover:border-slate-400 focus:border-primary">
              <option value="all" id="all">All formats</option>
              <option value="online" id="online">Online</option>
              <option value="in-person" id="inperson">In Person</option>
              <option value="hybrid" id="hybrid">Hybrid</option>
            </select>
          </div>
          <label htmlFor="beginnercheck" className="flex min-h-12 cursor-pointer items-center gap-3 rounded-lg px-1 text-sm font-medium text-slate-700 md:col-span-2 lg:col-span-1 lg:px-2">
            <input type="checkbox" id="beginnercheck" checked={beginneronly} onChange={updateBeginner} className="size-5 shrink-0 cursor-pointer rounded border-slate-300 accent-primary"/>
            Beginner friendly only
          </label>
        </div>
      </section>

      <section aria-labelledby="results-heading" className="mt-9">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
          <h2 id="results-heading" aria-live="polite" aria-atomic="true" className="text-base font-semibold">{filteredHackathons.length} {filteredHackathons.length === 1 ? "hackathon" : "hackathons"} found</h2>
          <p className="text-sm text-secondary">Earliest deadline first</p>
        </div>
        {filteredHackathons.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-surface px-5 py-14 text-center sm:py-20">
            <span aria-hidden="true" className="mx-auto mb-5 flex size-12 items-center justify-center rounded-xl bg-gray-100 text-black"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-6"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg></span>
            <h3 className="text-xl font-semibold tracking-tight">No hackathons found</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-secondary">Try a different name, choose another format, or turn off the beginner-only filter.</p>
          </div>
        )}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredHackathons.map(hackathon => (<HackathonCard hackathon={hackathon} key={hackathon.id}/>))}
        </div>
      </section>
    </>);
}
