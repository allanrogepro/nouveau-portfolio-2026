import Header from "@/components/layout/Header";

export default function MentionsLegales() {
  return (
    <main className="relative w-full min-h-screen bg-brand-light text-brand-dark flex flex-col pt-32 pb-24 px-6 md:px-12 z-20">
      <Header />
      
      <div className="max-w-4xl mx-auto w-full flex-1 mt-12 bg-white rounded-[40px] shadow-sm border border-brand-dark/5 p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter mb-16">
          Mentions Légales
        </h1>

        <div className="space-y-16">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-olive inline-block"></span>
              1. Édition du site
            </h2>
            <div className="text-sm md:text-base leading-relaxed text-brand-dark/70 space-y-4">
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <ul className="space-y-2 mt-4 font-medium text-brand-dark/80">
                <li><strong className="text-brand-dark font-bold">Propriétaire du site :</strong> Allan ROGÉ</li>
                <li><strong className="text-brand-dark font-bold">Contact :</strong> allanrogepro@gmail.com</li>
                <li><strong className="text-brand-dark font-bold">Adresse :</strong> 55 place de la république 62300 Lens</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-dark inline-block"></span>
              2. Hébergement
            </h2>
            <div className="text-sm md:text-base leading-relaxed text-brand-dark/70 space-y-4">
              <p>Le site est hébergé par :</p>
              <div className="bg-brand-light/50 border border-brand-dark/5 p-6 rounded-2xl max-w-sm mt-4 text-sm font-medium">
                <p className="font-bold text-brand-dark mb-1">Netlify, Inc.</p>
                <p>512 2nd Street, Suite 200</p>
                <p>San Francisco, CA 94107, USA</p>
                <p>support@netlify.com</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-olive inline-block"></span>
              3. Propriété intellectuelle
            </h2>
            <div className="text-sm md:text-base leading-relaxed text-brand-dark/70 space-y-4">
              <p>
                <strong className="text-brand-dark font-bold">Allan ROGÉ</strong> est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-dark inline-block"></span>
              4. Données personnelles
            </h2>
            <div className="text-sm md:text-base leading-relaxed text-brand-dark/70 space-y-4">
              <p>
                Ce site ne collecte aucune donnée personnelle à l'insu de l'utilisateur. Les informations recueillies via le formulaire de contact (Nom, Email) ne sont utilisées que pour répondre à votre demande et ne sont jamais transmises à des tiers.
              </p>
              <p>
                Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : <strong className="text-brand-dark font-bold">allanrogepro@gmail.com</strong>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
