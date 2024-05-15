import Link from "next/link"
export default function StudentList (){
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li> <Link href = "./studentlist/ahmad"> Ahmad </Link> </li>
                <li> <Link href = "./studentlist/Zubair"> Zubair </Link> </li>
                <li> <Link href = "./studentlist/Aqib"> Aqib </Link> </li>
                <li> <Link href = "./studentlist/Zanii"> Zanii </Link> </li>
                <li> <Link href = "./studentlist/Murtaza"> Murtaza </Link> </li>
            </ul>
            
        </div>
    )
}