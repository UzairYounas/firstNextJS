// "use client"
export default function Student ({params}) {
    return (
        <div>
            <h1>Student details</h1>
            <h3>Name : {params.student}</h3>
        </div>
    )
}