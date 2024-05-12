import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>Welcome to Reciepie App</h1>
    <Link href={'/recipe-list'}>Explore Reciepie</Link>
   </div>
  );
}
