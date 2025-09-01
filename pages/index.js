import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <h1>School App</h1>
      <p>Use the links below:</p>
      <div className="links">
        <Link href="/addSchool" className="btn">Add School</Link>
        <Link href="/showSchools" className="btn secondary">Show Schools</Link>
      </div>
    </main>
  );
}