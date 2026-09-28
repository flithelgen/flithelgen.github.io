import { MailIcon } from "./Icons.tsx";

export default function Registration() {
  return (
    <section id="anmalan" className="container section">
      <h2 className="section__title">Anmälan</h2>
      <div className="card">
        <div className="deadline">
          <p className="deadline__label">⏰ SISTA ANMÄLNINGSDAG</p>
          {/* Uppdatera sista anmälningsdag varje år */}
          <p className="deadline__date">12 januari 2027</p>
        </div>
        <p className="text-lg spaced">
          Anmäl dig via Google Forms eller skicka mail till{" "}
          <span className="text-accent text-semibold">flithelgen@gmail.com</span>
        </p>
        <div className="button-row spaced">
          <a href="https://forms.gle/ma3wmziUuuVVkWsK6" target="_blank" rel="noopener noreferrer" className="button button--primary button--grow">
            Anmäl dig via Google Forms
          </a>
          <a href="mailto:flithelgen@gmail.com" className="button button--outline button--grow">
            <MailIcon />
            Skicka mail
          </a>
        </div>
        <p className="card__text">Observera att fälten markerade med * är obligatoriska.</p>
        {/* Uppdatera datum för reservbesked varje år */}
        <p className="small-note">Efter anmälningsdeadline kan du bli reserv - du får information den 15 januari.</p>
      </div>
    </section>
  );
}
