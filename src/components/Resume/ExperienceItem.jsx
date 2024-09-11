export default function ExperienceItem({ company, positions }) {
  return (
    <div style={{ marginBottom: 45 }}>
      <h2>{company}</h2>
      {positions.map((p) => (
        <>
          <p>
            {p.position_title} // {p.position_start} - {p.position_end}
          </p>
          <ul>
            {p.details.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}
