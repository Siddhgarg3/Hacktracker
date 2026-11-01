import Link from "next/link"
export default function Navbar(){
    return(
        <>
        <header>
            <nav className = "navbar" id = "navbar">
                <ul>
                    <li><Link href="/"> Discover page </Link> </li>
                    <li><Link href="/saved"> Saved hackathons</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}