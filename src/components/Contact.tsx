import { InstagramIcon, MailIcon, MusicIcon } from "./Icons.tsx";

const channels = [
  { title: "Email", Icon: MailIcon, href: "mailto:flithelgen@gmail.com", label: "flithelgen@gmail.com", external: false },
  { title: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/flickoriteknik", label: "@flickoriteknik", external: true },
  { title: "TikTok", Icon: MusicIcon, href: "https://www.tiktok.com/@flickor.i.teknik", label: "@flickor.i.teknik", external: true },
];

export default function Contact() {
  return (
    <section id="kontakt" className="container section">
      <h2 className="section__title">Kontakta oss</h2>
      <div className="grid grid--3">
        {channels.map(({ title, Icon, href, label, external }) => (
          <div key={title} className="card card--lift contact-card">
            <Icon className="icon icon--large" />
            <h3 className="card__subtitle">{title}</h3>
            <a
              href={href}
              className="contact-card__link"
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {label}
            </a>
          </div>
        ))}
      </div>
      <div className="contact-banner">
        <p>Hör gärna av er vid funderingar! Vi svarar så snart vi kan. 💬</p>
      </div>
    </section>
  );
}
