export default function Kelas({ biodata }) {
  return (
    <div className="card">
      <h2>Kelas</h2>
      <p>{biodata.kelas}</p>
    </div>
  );
}