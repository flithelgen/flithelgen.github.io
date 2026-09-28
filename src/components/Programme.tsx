const tracks = [
  {
    title: "Informations- och Medieteknik",
    text: "Programmering, datorers uppbyggnad, nätverk och digitalteknik. Lär dig allt från kod till hårdvara!",
    topics: [ "Programmering", "Nätverk & säkerhet", "Digitalteknik" ],
  },
  {
    title: "Design",
    text: "Designa produkter, skapa 3D-modeller, och lär dig professionell bildbehandling!",
    topics: [ "3D-modellering", "Bildbehandling", "Produktdesign" ],
  },
];

export default function Programme() {
  return (
    <section id="teknik" className="container section">
      <h2 className="section__title">Teknikprogrammet på Västermalm</h2>
      <div className="grid grid--2 grid--spaced">
        {tracks.map((track) => (
          <div key={track.title} className="card card--gradient">
            <h3 className="card__title card__title--accent">{track.title}</h3>
            <p className="card__text">{track.text}</p>
            <ul className="check-list">
              {track.topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="card">
        <h3 className="card__title card__title--accent">Om FLIT-helgen</h3>
        <p className="card__text">
          Under två dagar får du testa på verkliga teknik-aktiviteter tillsammans med tjejer från tredje året. Du får
          programmera, designa, bygga 3D-modeller och mycket mer!
        </p>
        <p className="text-accent text-semibold">Inga förkunskaper krävs - bara nyfikenhet och viljan att utforska!</p>
      </div>
    </section>
  );
}
