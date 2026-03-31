export default function Jurusan({ biodata }) {
  return (
    <div className="card">
      <h2>Prodi</h2>
      <p>{biodata.jurusan}</p>
    </div>
  );
}