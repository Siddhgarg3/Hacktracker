import Link from "next/link"
export default function NotFound(){
    return(<>
        <h1> Hackathon not found. </h1>
        <Link href = "/"> Go back to discover page </Link>
    </>
    )
}
