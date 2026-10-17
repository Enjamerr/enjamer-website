export default function InfoBlock({ title, description }) {
  return (
    <div className="info-block">
      <h3 className="info-block-title">{title}</h3>
      <p className="info-block-desc">{description}</p>
    </div>
  );
}
