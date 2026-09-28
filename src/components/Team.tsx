// Uppdatera namnen varje år
const members = [
  "Laura Connell",
  "Antonina Bukhonina",
  "Josefine Grönlund",
  "Henny Widén Hjort",
  "Wendela Dusthall",
  "Ylva Öhlén",
  "Havanna Kastebo",
  "Diana Kryshchuk",
  "Polly Wahlbeck",
];

function separator(index: number) {
  if (index === members.length - 1) return null;
  if (index === members.length - 2) return " och ";
  return ", ";
}

export default function Team() {
  return (
    <section id="om-oss" className="container section">
      <h2 className="section__title">Om oss</h2>
      <div className="card card--flush">
        <div className="grid grid--2 about">
          <div>
            <h3 className="card__title card__title--spaced">Årets FLIT-tjejer</h3>
            <div className="stack">
              <p className="text-lg">
                Vi är{" "}
                {members.map((name, index) => (
                  <span key={name}>
                    <strong className="text-accent">{name}</strong>
                    {separator(index)}
                  </span>
                ))}{" "}
                - årets FLIT-tjejer som ska hålla i FLIT-helgen i januari.
              </p>
              <p className="text-lg">Vi åker också runt och besöker olika grundskolor i Sundsvall för att inspirera ännu fler tjejer.</p>
              <div className="callout callout--thin">
                <p className="callout__body">
                  Våra resor genom gymnasiet skiljer sig från varandra, men det vi har gemensamt är att vi{" "}
                  <strong className="text-accent">alla studerar tredje året av tekniklinjen på Västermalm</strong>!
                </p>
                <p className="callout__text">Hoppas vi ses på FLIT-helgen! 💖</p>
              </div>
            </div>
          </div>
          <div className="about__photo">
            <img src="/team-photo.jpg" alt="Årets FLIT-tjejer" />
          </div>
        </div>
      </div>
    </section>
  );
}
