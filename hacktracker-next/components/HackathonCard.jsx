import Link from "next/link"
export default function HackathonCard({hackathon}){
    return <>
        <article>
            <h2> {hackathon.name}</h2>
            <p> {hackathon.format}</p>
            <p> {hackathon.beginnerFriendly ? "Beginner":"Prior experience recommended"}</p>
            <p> {hackathon.deadline}</p>
            <Link href={`/hackathons/${hackathon.id}`}> View details </Link>
        </article>
    </>
}