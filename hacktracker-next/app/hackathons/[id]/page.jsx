import { hackathons } from "../../../data/hackathons";
import { notFound } from "next/navigation";
import { formatDeadline } from "../../../lib/deadlines";
export default async function HackathonDetails({params}){
    const { id: idofpage } = await params;
    const hackathonreference = hackathons.find(({id}) => id === Number(idofpage))
    if (hackathonreference === undefined) {
        notFound();
    }
    return(
        <>
        <h1>{hackathonreference.name}</h1>
        <p>Format: {hackathonreference.format}</p>
        <p>Deadline: {formatDeadline(hackathonreference.deadline)}</p>
        <p>Organizer: {hackathonreference.organizer}</p>
        <p>Description: {hackathonreference.description}</p>
        <p>Location: {hackathonreference.location}</p>
        <p>Eligibility: {hackathonreference.eligibilityDetails}</p>
        {hackathonreference.registrationUrl ? (
            <a href={hackathonreference.registrationUrl}>Register on organizer website</a>
        ) : (
            <p>Registration link unavailable</p>
        )}

        </>
    )
}
