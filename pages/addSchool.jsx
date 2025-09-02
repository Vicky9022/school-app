import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function AddSchool() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [result, setResult] = useState(null);
  const [err, setErr] = useState(null);

  const onSubmit = async (data) => {
    setErr(null);
    setResult(null);
    const formData = new FormData();
    Object.keys(data).forEach(k => {
      if (k !== 'image') formData.append(k, data[k]);
    });
    if (data.image && data.image[0]) formData.append('image', data.image[0]);

    try {
      const res = await fetch('/api/addSchool', { method: 'POST', body: formData });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || 'Failed');
      setResult('School saved successfully ✅');
      reset();
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <main className="container">
      <div className="card">
        <h1>Add School</h1>
        <p className="footer-note">Form uses react-hook-form and uploads images to Cloudinary.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>School Name</label>
          <input {...register('name', { required: 'Name required', minLength: 2 })} className="input" />
          {errors.name && <div className="error">{errors.name.message}</div>}

          <label>Address</label>
          <textarea {...register('address', { required: 'Address required' })} className="input" rows={2} />
          {errors.address && <div className="error">{errors.address.message}</div>}

          <div className="row">
            <div>
              <label>City</label>
              <input {...register('city', { required: true })} className="input" />
            </div>
            <div>
              <label>State</label>
              <input {...register('state', { required: true })} className="input" />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Contact</label>
              <input {...register('contact', { required: true, pattern: /^[0-9]{10,15}$/ })} className="input" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" {...register('email_id', { required: true })} className="input" />
            </div>
          </div>

          <label>School Image</label>
          <input type="file" accept="image/*" {...register('image', { required: true })} className="input" />

          <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save School'}
            </button>
            <Link href="/showSchools" className="btn secondary">View Schools</Link>
          </div>

          {result && <p className="success">{result}</p>}
          {err && <p className="error">{err}</p>}
        </form>
      </div>
    </main>
  );
}
