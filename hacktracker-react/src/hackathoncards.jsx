
function HackathonCard({hackathon}){
    return <>
        <article>
            <h2> {hackathon.name}</h2>
            <p> {hackathon.format}</p>
            <p> {hackathon.beginnerFriendly ? "Beginner":"Prior experience recommended"}</p>
            <p> {hackathon.deadline}</p>
        </article>
    </>
}
export default HackathonCard