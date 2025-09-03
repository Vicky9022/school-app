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
    Object.keys(data).forEach((k) => {
      if (k !== 'image') formData.append(k, data[k]);
    });
    if (data.image && data.image[0]) {
      formData.append('image', data.image[0]);
    }

    try {
      const res = await fetch('/api/addSchool', {
        method: 'POST',
        body: formData
      });
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
        <p className="footer-note">This form uses <code>react-hook-form</code> for validation and uploads the image to <code>/public/schoolImages</code>.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>School Name</label>
          <input className="input" placeholder="Ex: D Y Patil International" {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })} />
          {errors.name && <div className="error">{errors.name.message}</div>}

          <label>Address</label>
          <textarea className="input" placeholder="Street, Area" rows={2} {...register('address', { required: 'Address is required' })} />
          {errors.address && <div className="error">{errors.address.message}</div>}

          <div className="row">
            <div>
              <label>City</label>
              <input className="input" placeholder="City" {...register('city', { required: 'City is required' })} />
              {errors.city && <div className="error">{errors.city.message}</div>}
            </div>
            <div>
              <label>State</label>
              <input className="input" placeholder="State" {...register('state', { required: 'State is required' })} />
              {errors.state && <div className="error">{errors.state.message}</div>}
            </div>
          </div>

          <div className="row">
            <div>
              <label>Contact</label>
              <input className="input" placeholder="10-digit phone" {...register('contact', { required: 'Contact is required', pattern: { value: /^[0-9]{10,15}$/, message: 'Enter 10-15 digits' } })} />
              {errors.contact && <div className="error">{errors.contact.message}</div>}
            </div>
            <div>
              <label>Email</label>
              <input type="email" className="input" placeholder="school@example.com" {...register('email_id', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} />
              {errors.email_id && <div className="error">{errors.email_id.message}</div>}
            </div>
          </div>

          <label>School Image</label>
          <input type="file" accept="image/*" className="input" {...register('image', { required: 'Image is required' })} />
          {errors.image && <div className="error">{errors.image.message}</div>}

          <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
            <button className="btn" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save School'}</button>
            <Link className="btn secondary" href="/showSchools">View Schools</Link>
          </div>
          {result && <p className="success">{result}</p>}
          {err && <p className="error">{err}</p>}
        </form>
      </div>
    </main>
  );
}