
import {
  ArrowRight,
  Code2,
  Palette,
  Smartphone,
  Database,
  CheckCircle2,
  Sparkles,
  Monitor
} from "lucide-react";

import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      icon: Code2,
      title: "Développement Web",
      description:
        "Création de sites web modernes, rapides et adaptés à tous les écrans."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Conception d'interfaces élégantes, intuitives et agréables à utiliser."
    },
    {
      icon: Smartphone,
      title: "Applications mobiles",
      description:
        "Développement d'applications mobiles modernes et performantes."
    }
  ];

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

          {/* HERO TEXT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <Sparkles size={16} />
              Bienvenue chez Mastersam
            </div>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Construisons ensemble
              <span className="block text-blue-500">
                votre avenir digital.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Mastersam accompagne vos projets numériques grâce au
              développement web, au design UI/UX et aux solutions
              technologiques innovantes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Découvrir nos services
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-white/30 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-950"
              >
                Nous contacter
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-400" />
                Design moderne
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-400" />
                Solutions innovantes
              </span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-600/20 blur-2xl"></div>

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
              alt="Espace de travail de développement informatique"
              className="relative h-[350px] w-full rounded-3xl object-cover shadow-2xl md:h-[500px]"
            />

            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-xl bg-white p-4 text-slate-900 shadow-xl md:left-8">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                <Monitor size={28} />
              </div>

              <div>
                <p className="font-bold">Mastersam Digital</p>
                <p className="text-sm text-slate-500">
                  Innovation & Technologie
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-widest text-blue-600">
              Ce que nous faisons
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Nos principaux services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Des solutions numériques adaptées à vos besoins et à vos ambitions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-4 text-blue-600">
                    <Icon size={32} strokeWidth={1.8} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
                  >
                    En savoir plus
                    <ArrowRight size={17} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-7 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Voir tous nos services
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
