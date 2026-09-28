// Uppdatera datum varje år
const facts = [
  { emoji: "📅", title: "När?", value: "30-31 januari 2027", note: "Starttid skickas två veckor innan." },
  { emoji: "🎯", title: "Vad?", value: "Teknik-aktiviteter", note: "Mat, fika och massor av roligt!" },
  { emoji: "📍", title: "Vart?", value: "Västermalms skola", note: "Universitetsallén 17, Sundsvall" },
];

export default function Details() {
  return (
    <section id="detaljer" className="container section">
      <h2 className="section__title">Praktisk Information</h2>
      <div className="grid grid--3 grid--spaced">
        {facts.map((fact) => (
          <div key={fact.title} className="info-card">
            <p className="info-card__emoji" aria-hidden="true">{fact.emoji}</p>
            <h3 className="info-card__title">{fact.title}</h3>
            <p className="info-card__value">{fact.value}</p>
            <p className="info-card__note">{fact.note}</p>
          </div>
        ))}
      </div>
      <div className="notice">
        <p>
          <strong className="text-accent">Vem kan anmäla sig?</strong><br />
          Du som är tjej eller icke-binär och går i årskurs 8 eller 9. Det finns 40 platser - vi prioriterar 9:or, sedan
          lottning för 8:or!
        </p>
      </div>
    </section>
  );
}
