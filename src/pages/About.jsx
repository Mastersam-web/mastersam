
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
  ArrowRight,
  Code2,
  Rocket
} from "lucide-react";

function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Nous recherchons constamment de nouvelles idées et technologies pour créer des solutions modernes."
    },
    {
      icon: ShieldCheck,
      title: "Qualité",
      description:
        "Nous accordons une grande importance à la qualité, à la fiabilité et à la performance de nos réalisations."
    },
    {
      icon: Heart,
      title: "Engagement",
      description:
        "Nous nous investissons dans chaque projet avec sérieux, créativité et passion."
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Nous valorisons l'écoute, le partage et le travail d'équipe pour atteindre les objectifs."
    }
  ];

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-slate-950 px-6 py-20 text-center text-white">
        <span className="font-semibold uppercase tracking-[4px] text-blue-400">
          Qui sommes-nous ?
        </span>

        <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
          À propos de <span className="text-blue-500">Mastersam</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Découvrez notre identité, notre vision et notre passion
          pour le monde du numérique.
        </p>
      </section>

      {/* ABOUT INTRODUCTION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-blue-100"></div>

            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
              alt="Équipe travaillant ensemble sur un projet numérique"
              className="relative h-[350px] w-full rounded-3xl object-cover shadow-xl md:h-[480px]"
            />

            <div className="absolute -bottom-6 right-5 flex items-center gap-3 rounded-xl bg-white p-5 shadow-xl md:right-8">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                <Code2 size={28} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Mastersam
                </h3>
                <p className="text-sm text-slate-500">
                  Digital Solutions
                </p>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <span className="font-semibold uppercase tracking-widest text-blue-600">
              Notre histoire
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              La technologie au service de vos idées.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Mastersam est une identité orientée vers la création de
              solutions numériques modernes. Notre objectif est de
              transformer les idées en expériences digitales utiles,
              accessibles et performantes.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Nous nous intéressons particulièrement au développement
              web, au design d'interfaces, aux applications mobiles
              et à la gestion des données.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Chaque projet représente une occasion de mettre la
              technologie, la créativité et l'innovation au service
              d'un besoin concret.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Découvrir nos services
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-4 text-blue-600">
              <Target size={32} />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Notre mission
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Proposer des solutions informatiques modernes qui
              facilitent les activités, améliorent les expériences
              numériques et répondent aux besoins des utilisateurs.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-4 text-blue-600">
              <Eye size={32} />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Notre vision
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Développer une présence numérique reconnue pour la
              créativité, la qualité et la capacité à transformer
              les idées en projets technologiques utiles.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <span className="font-semibold uppercase tracking-widest text-blue-600">
              Ce qui nous guide
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Nos valeurs fondamentales
            </h2>

            <p className="mt-4 text-slate-600">
              Les principes qui orientent notre manière de travailler.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-blue-50 p-4 text-blue-600">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <Rocket size={42} className="mx-auto" />

        <h2 className="mt-5 text-3xl font-extrabold">
          Construisons quelque chose de remarquable.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Vous avez une idée ou un projet numérique ?
          Nous serions heureux d'en discuter avec vous.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-bold text-blue-700 transition hover:bg-slate-100"
        >
          Parlons de votre projet
          <ArrowRight size={19} />
        </Link>
      </section>

    </main>
  );
}

export default About;
