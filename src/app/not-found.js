import Link from "next/link";



export default function NotFound(){
    return(
        <div>
            <h1>This Page can not be Found </h1>
            <Link href={"/"}>Go to Home Page Back</Link>
        </div>
    )
}