export default function AboutFlit() {
  return (
    <section id="om-flit" className="container section">
      <h2 className="section__title">Vad är Flickor i Teknik?</h2>
      <div className="grid grid--2 grid--center">
        <div className="stack">
          {/* Uppdatera födelseåren varje år */}
          <p className="text-lg">
            Flickor i teknik är ett gymnasiearbete vars syfte är att informera tjejer och icke-binära född 2011 och 2012
            om teknikprogrammet och vad det har att erbjuder.
          </p>
          <p className="text-lg">
            Arbetet drivs av en ny grupp tjejer varje år. I år finns det tre olika grupper från årskurs tre med
            erfarenhet från olika inriktningar.
          </p>
          <div className="callout">
            <p className="callout__text">Det bästa med teknik? Du behöver inga förkunskaper alls!</p>
          </div>
        </div>
        <div className="card">
          <h3 className="card__title">Vad gör vi?</h3>
          <ul className="arrow-list">
            <li><span><strong>Föreläser</strong> på skolor</span></li>
            <li><span><strong>Arrangerar</strong> aktiviteter för teknikstudenter</span></li>
            <li><span><strong>Håller</strong> en inspirerande teknik-helg</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
