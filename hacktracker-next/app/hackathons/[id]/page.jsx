import { hackathons } from "../../../data/hackathons";
export default async function HackathonDetails({params}){
    const { id: idofpage } = await params;
    const hackathonreference = hackathons.find(({id}) => id === Number(idofpage))
    if (hackathonreference === undefined) {
        return <h1>Hackathon not found</h1>;
    }
    return(
        <>
        <h1>{hackathonreference.name}</h1>
        <p>Format: {hackathonreference.format}</p>
        <p>Deadline: {hackathonreference.deadline}</p>
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
