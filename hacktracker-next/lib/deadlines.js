const deadlineFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
});

export function parseDeadline(deadline) {
    // Require a timestamp with a timezone rather than guessing a local cutoff.
    if (typeof deadline !== "string" || !/T.*(?:Z|[+-]\d{2}:\d{2})$/i.test(deadline)) {
        return null;
    }

    const date = new Date(deadline);
    return Number.isNaN(date.getTime()) ? null : date;
}

export function formatDeadline(deadline) {
    const date = parseDeadline(deadline);
    return date ? `${deadlineFormatter.format(date)} UTC` : "Deadline unavailable";
}

export function compareDeadlines(a, b) {
    const first = parseDeadline(a.deadline);
    const second = parseDeadline(b.deadline);

    if (!first && !second) return 0;
    if (!first) return 1;
    if (!second) return -1;
    return first.getTime() - second.getTime();
}
