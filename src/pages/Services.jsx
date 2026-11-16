
import { Link } from "react-router-dom";
import {
  Code2,
  Palette,
  Smartphone,
  Database,
  Wrench,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: Code2,
      title: "Développement Web",
      description:
        "Nous concevons des sites web modernes, professionnels, rapides et adaptés aux ordinateurs, tablettes et smartphones.",
      technologies: ["React", "Next.js", "HTML", "CSS"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Nous créons des interfaces modernes, élégantes et faciles à utiliser pour offrir une excellente expérience utilisateur.",
      technologies: ["Figma", "Prototypage", "Responsive Design"]
    },
    {
      icon: Smartphone,
      title: "Applications mobiles",
      description:
        "Nous développons des applications mobiles intuitives et performantes pour répondre aux besoins des utilisateurs.",
      technologies: ["Flutter", "React Native", "Android"]
    },
    {
      icon: Database,
      title: "Bases de données",
      description:
        "Nous concevons et organisons des bases de données sécurisées pour gérer efficacement les informations.",
      technologies: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      icon: Wrench,
      title: "Maintenance informatique",
      description:
        "Nous accompagnons les entreprises dans la maintenance, l'amélioration et le dépannage de leurs solutions informatiques.",
      technologies: ["Diagnostic", "Support", "Optimisation"]
    },
    {
      icon: Lightbulb,
      title: "Conseil numérique",
      description:
        "Nous aidons les entreprises à choisir les technologies et les stratégies adaptées à leurs projets numériques.",
      technologies: ["Analyse", "Stratégie", "Innovation"]
    }
  ];

  return (
    <main className="bg-white">

      {/* PAGE HERO */}
      <section className="bg-slate-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <span className="font-semibold uppercase tracking-[4px] text-blue-400">
            Nos expertises
          </span>

          <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
            Nos services <span className="text-blue-500">digitaux</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Découvrez nos solutions technologiques pour développer vos idées,
            moderniser vos activités et réussir vos projets.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Ce que nous proposons
            </h2>
            <p className="mt-4 text-slate-600">
              Des solutions conçues pour répondre à vos besoins.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={index}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={32} strokeWidth={1.8} />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="min-h-24 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Demander un service
                    <ArrowRight size={18} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Pourquoi choisir Mastersam ?
            </h2>
            <p className="mt-4 text-slate-600">
              Notre engagement pour la qualité et l'innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <CheckCircle2 className="mx-auto text-blue-600" size={38} />
              <h3 className="mt-4 font-bold text-slate-900">Qualité</h3>
              <p className="mt-2 text-slate-600">
                Des réalisations soignées et professionnelles.
              </p>
            </div>

            <div className="text-center">
              <ShieldCheck className="mx-auto text-blue-600" size={38} />
              <h3 className="mt-4 font-bold text-slate-900">Fiabilité</h3>
              <p className="mt-2 text-slate-600">
                Des solutions pensées pour être fiables et maintenables.
              </p>
            </div>

            <div className="text-center">
              <Globe className="mx-auto text-blue-600" size={38} />
              <h3 className="mt-4 font-bold text-slate-900">Innovation</h3>
              <p className="mt-2 text-slate-600">
                Des technologies modernes adaptées à vos projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-extrabold">
          Vous avez un projet en tête ?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Parlons de votre idée et construisons ensemble une solution adaptée.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-bold text-blue-700 transition hover:bg-slate-100"
        >
          Contactez-nous
          <ArrowRight size={19} />
        </Link>
      </section>

    </main>
  );
}

export default Services;
