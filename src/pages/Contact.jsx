
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  UserRound,
  MessageSquare,
  Clock,
  CheckCircle2
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "contact@mastersam.com";

    const body = `
Nom : ${formData.name}
Email : ${formData.email}

Message :
${formData.message}
    `;

    const mailtoLink =
      `mailto:${recipient}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-slate-950 px-6 py-20 text-center text-white">
        <span className="font-semibold uppercase tracking-[4px] text-blue-400">
          Parlons de votre projet
        </span>

        <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
          Contactez <span className="text-blue-500">Mastersam</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Une question, une idée ou un projet ? Nous sommes disponibles
          pour échanger avec vous.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          {/* CONTACT INFORMATION */}
          <div>
            <span className="font-semibold uppercase tracking-widest text-blue-600">
              Nos coordonnées
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900">
              Restons en contact
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Nous sommes à votre écoute pour discuter de vos besoins
              en développement web, design, applications mobiles et
              solutions informatiques.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-50 p-4 text-blue-600">
                  <Mail size={25} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <a
                    href="mailto:contact@mastersam.com"
                    className="mt-1 text-slate-600 hover:text-blue-600"
                  >
                    contact@mastersam.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-50 p-4 text-blue-600">
                  <Phone size={25} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Téléphone</h3>
                  <p className="mt-1 text-slate-600">
                    +257 XX XX XX XX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-50 p-4 text-blue-600">
                  <MapPin size={25} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Localisation</h3>
                  <p className="mt-1 text-slate-600">
                    Bujumbura, Burundi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-50 p-4 text-blue-600">
                  <Clock size={25} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Disponibilité</h3>
                  <p className="mt-1 text-slate-600">
                    Contactez-nous pour discuter de votre projet.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 rounded-2xl bg-blue-50 p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600" size={25} />
                <h3 className="font-bold text-slate-900">
                  Votre projet nous intéresse
                </h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Présentez-nous votre idée et nous pourrons échanger
                sur les possibilités de réalisation.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg md:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Envoyez-nous un message
            </h2>

            <p className="mt-2 text-slate-500">
              Remplissez les informations ci-dessous.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Votre nom
                </label>

                <div className="flex items-center gap-3 rounded-lg border border-slate-300 px-4 focus-within:border-blue-500">
                  <UserRound size={19} className="text-slate-400" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Entrez votre nom"
                    required
                    className="w-full py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Votre adresse email
                </label>

                <div className="flex items-center gap-3 rounded-lg border border-slate-300 px-4 focus-within:border-blue-500">
                  <Mail size={19} className="text-slate-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemple@email.com"
                    required
                    className="w-full py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Sujet
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre message"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Votre message
                </label>

                <div className="flex items-start gap-3 rounded-lg border border-slate-300 px-4 focus-within:border-blue-500">
                  <MessageSquare
                    size={19}
                    className="mt-4 text-slate-400"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet..."
                    rows="5"
                    required
                    className="w-full resize-none py-3 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Envoyer le message
                <Send size={19} />
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;
