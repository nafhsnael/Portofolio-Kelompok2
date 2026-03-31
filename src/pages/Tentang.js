export default function Tentang({ biodata }) {
  return (
    <div className="card">
      <h2>Tentang Saya</h2>
      <p style={{ textAlign: 'justify' }}>
        {biodata.tentang}
      </p>
    </div>
  );
}