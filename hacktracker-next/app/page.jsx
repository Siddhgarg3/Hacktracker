import Link from "next/link";

export default function Home() {
  return (<>
  <h1> Discover Hackathons </h1>
  <Link href = "/saved"> Saved Hackathons </Link>
  </>
  );
}
