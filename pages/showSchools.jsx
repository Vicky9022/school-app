import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/getSchools');
        const json = await res.json();
        if (!res.ok) throw new Error(json.message || 'Failed to fetch');
        setSchools(json.schools || []);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = schools.filter(s => {
    const k = (s.name + ' ' + s.city + ' ' + s.state + ' ' + s.address).toLowerCase();
    return k.includes(query.toLowerCase());
  });

  return (
    <main className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h1>Schools</h1>
        <Link href="/addSchool" className="btn">Add School</Link>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <input className="input" placeholder="Search by name, city, state..." value={query} onChange={e => setQuery(e.target.value)} />
      </div>

      {loading && <p>Loading...</p>}
      {err && <p className="error">{err}</p>}

      <div className="grid">
        {filtered.map(s => (
          <article key={s.id} className="card">
            <img className="image" src={s.image || '/schoolImages/placeholder.png'} alt={s.name} />
            <div className="card-title">{s.name}</div>
            <div className="card-sub">{s.address}</div>
            <div className="card-sub">{s.city}</div>
          </article>
        ))}
      </div>

      {!loading && filtered.length === 0 && <p className="footer-note">No schools found.</p>}
    </main>
  );
}
