import { ArrowRightIcon, SparklesIcon } from "./Icons.tsx";

export default function Hero() {
  return (
    <section id="hem" className="container hero">
      <div className="slide-in">
        <p className="hero__badge">
          <SparklesIcon className="icon icon--small" />
          En inspirerande helg för tjejer
        </p>
        <h1 className="hero__title">Flickor i Teknik</h1>
        <p className="hero__lead">Utforska teknik, möt inspirerande tjejer och ta del av en oförglömlig helg</p>
        <div className="button-row button-row--center">
          <a href="#anmalan" className="button button--primary">
            Anmäl dig nu
            <ArrowRightIcon />
          </a>
          <a href="#om-flit" className="button button--outline">Läs mer</a>
        </div>
      </div>
    </section>
  );
}
