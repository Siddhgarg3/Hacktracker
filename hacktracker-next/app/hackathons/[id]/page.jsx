export default async function hackathondetails({params}){
    const { id } = await params;
    return(
        <>
        <h1> hackathon details for {id} </h1>
        </>
    )
}