const milestones = [
  { year: "2015", title: "Början", text: "Anne-Mi Liljestrand och Carina Turton startar FLIT som en sommarkurs för tjejer i årskurs 8." },
  { year: "2016", title: "Utveckling", text: "Inspirerad av Bromangymnasiet blir FLIT ett gymnasiearbete som arrangeras under en helg." },
  { year: "Idag", title: "Framtid", text: "FLIT inspirerar hundratals tjejer varje år att utforska teknik och sina möjligheter." },
];

export default function History() {
  return (
    <section className="container section">
      <h2 className="section__title">Historien bakom FLIT</h2>
      <div className="grid grid--3">
        {milestones.map((milestone) => (
          <div key={milestone.year} className="card card--lift">
            <p className="card__year">{milestone.year}</p>
            <h3 className="card__subtitle">{milestone.title}</h3>
            <p>{milestone.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
