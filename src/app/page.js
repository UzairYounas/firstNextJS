import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>
        This is main Page
      </h1>
      <br />
      <br />

      <ul>
        <li>
          <Link href="/about"> Go to about Page </Link>
          <br />
        </li>
        <li>
          <Link href="/login"> Go to Login Page</Link>
        </li>
        <li>
          <Link href="/page">Go to about page</Link>
        </li>
      </ul>
    </>

  );
}
