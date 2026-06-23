export interface Project {
  slug: string;
  title: string;
  category: string;
  color: string;
  size?: "small" | "medium" | "large";
  role: string;
  year: string;
  client: string;
  overview: string;
  challenge: string;
  process: string;
  resultHeadline: string;
  software?: string[];
  images: {
    hero?: string;
    main?: string;
    detail1?: string;
    detail2?: string;
    detail3?: string;
    detail4?: string;
  };
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "chwrs-aya-nakamura",
    title: "CHWRS - Aya Nakamura",
    category: "Affiches",
    color: "bg-brand-blue",
    size: "small",
    role: "Designer",
    year: "2025",
    client: "Projet Personnel",
    overview: "Conception d'une identité visuelle pour la marque de chewing-gum fiction CHWRS et réalisation d'une campagne promotionnelle événementielle en collaboration avec l'artiste Aya Nakamura. L'identité visuelle mise sur un contraste fort entre un bleu électrique et un rose pour créer un univers ultra-coloré, énergique et résolument pop.",
    challenge: "L’enjeu était de créer une synergie visuelle percutante entre l’univers pop et affirmé de l’artiste et l’image de marque de CHWRS. Il fallait concevoir un visuel publicitaire capable d'attirer l’œil en milieu urbain tout en promouvant à la fois un produit de grande consommation et la sortie d’un nouveau titre musical.",
    process: "Le travail a débuté par la création d'un lettrage personnalisé en 3D à l'aspect gonflé et brillant, rappelant directement la texture du chewing-gum. Ensuite, la composition publicitaire a été structurée pour intégrer efficacement le message fort invitant à streamer le dernier goût Pookie avec l’image de l’artiste. Enfin, le visuel a été décliné et testé sur des supports de mobilier urbain comme des abribus via Photoshop et Illustrator pour valider l'impact de la campagne en situation réelle.",
    resultHeadline: "Un processus créatif fluide soutenu par les meilleurs outils du marché pour un rendu optimal.",
    software: ["Figma", "Photoshop", "Illustrator"],
    images: {
      hero: "/AYA/Affiche.jpg",
      main: "/AYA/Affiche.jpg",
      detail1: "/AYA/Affiche.jpg",
      detail2: "/AYA/Mockup.png"
    },
    tags: ["Web Design", "Développement", "Direction Artistique"]
  },
  {
    slug: "Rebranding-Lotus",
    title: "Lotus Cars",
    category: "Rebranding",
    color: "bg-brand-blue",
    size: "small",
    role: "Designer",
    year: "2025",
    client: "Projet Personnel",
    overview: "Redéfinir la présence digitale d'une marque, en se concentrant sur un storytelling immersif et une intégration fluide.",
    challenge: "Moderniser l’identité visuelle de Lotus Cars, marque légendaire de voitures de sport, afin de simplifier et de dynamiser le logotype historique pour l’adapter aux nouveaux codes culturels de l’électrique. L’enjeu était de remettre au goût du jour un logo chargé d’histoire sans trahir l’ADN de la marque. Il fallait ainsi épurer les formes, améliorer la lisibilité du monogramme ACBC (Anthony Colin Bruce Chapman) et donner une impulsion plus technologique à l’ensemble.",
    process: "Le travail a commencé par une épuration globale du logo en ne retenant que deux cercles concentriques imbriqués pour constituer la base de la nouvelle structure plus fluide et aérodynamique. Les lignes du monogramme ont été redressées avec des tracés plus nets, supprimant les chevauchements complexes pour une meilleure reconnaissance visuelle, même à petite échelle. Une police sans-serif plus affirmée et espacée a été sélectionnée pour évoquer la modernité et la précision technique. Enfin, le nouveau système graphique a fait l'objet d'une déclinaison lifestyle à travers son application sur divers supports corporate (papeterie, enseignes) pour tester sa force visuelle dans un environnement réel.",
    resultHeadline: "Un processus créatif fluide soutenu par les meilleurs outils du marché pour un rendu optimal.",
    software: ["Figma", "Photoshop", "Illustrator"],
    images: {
      hero: "/Lotus/devanturelotus.png",
      main: "/Lotus/devanturelotus.png",
      detail1: "/Lotus/lotuslogo.png",
      detail2: "/Lotus/enveloppelotus.png",
    },
    tags: ["Web Design", "Développement", "Direction Artistique"]
  },
  {
    slug: "VBAgencement-card",
    title: "VB Agencement - Carte de visite",
    category: "Prints",
    color: "bg-brand-blue",
    size: "small",
    role: "Designer",
    year: "2025",
    client: "VB Agencement",
    overview: "Redéfinir la présence digitale d'une marque, en se concentrant sur un storytelling immersif et une intégration fluide.",
    challenge: "Réalisation de la carte de visite pour VB Agencement, cabinet d’architecture d’intérieur. Sur la base d’un logotype déjà existant, l’objectif était de concevoir un support physique élégant et professionnel, en accord avec l’image de marque de l’entreprise. L'enjeu majeur consistait à mettre en valeur une identité visuelle établie sur un support print de petit format, en trouvant le bon équilibre entre les informations de contact et l’espace blanc pour refléter la notion de structure et de clarté propre au métier d’architecte.",
    process: "La conception a débuté par l'utilisation d'une grille épurée pour organiser rigoureusement les informations au verso de la carte, garantissant ainsi une lisibilité maximale. Les codes graphiques existants ont été appliqués de manière stricte, notamment le monogramme encadré et la typographie manuscrite, pour assurer une continuité parfaite de l’image de marque. Enfin, une attention particulière a été portée au choix des finitions avec la sélection d’un rendu texturé effet papier de création sur les mockups via Illustrator, Photoshop et Figma, afin de simuler un toucher haut de gamme et renforcer l’aspect qualitatif du service proposé.",
    resultHeadline: "Un processus créatif fluide soutenu par les meilleurs outils du marché pour un rendu optimal.",
    software: ["Figma", "Photoshop", "Illustrator"],
    images: {
      hero: "/VB/mockupvb.png",
      main: "/VB/mockupvb.png",
      detail1: "/VB/mockupvb.png",
      detail2: "/VB/vb.png",
    },
    tags: ["Web Design", "Développement", "Direction Artistique"]
  },
  {
    slug: "SampleDays",
    title: "SampleDays",
    category: "Identité Visuelle",
    color: "bg-brand-blue",
    size: "small",
    role: "Designer",
    year: "2025",
    client: "Projet Personnel",
    overview: "Redéfinir la présence digitale d'une marque, en se concentrant sur un storytelling immersif et une intégration fluide.",
    challenge: "Création d’un logotype et déclinaison sur divers supports pour le nouveau festival de hip-hop Sample DAYS, un événement liant culture musicale et univers du streetwear. L’objectif était de concevoir une identité visuelle forte, jeune et dynamique capable de marquer les esprits et d'affirmer le positionnement du festival avec une identité visuelle percutante.",
    process: "Le développement créatif a débuté par un travail typographique fort en combinant des lettres épaisses et une typographie manuscrite pour affirmer l’aspect urbain. L’identité repose sur le choix d'une palette de couleurs audacieuse avec une dominance de tons marron, jaune, beige et crème pour renforcer le côté street de la marque de manière originale. Les outils Illustrator et Photoshop ont permis de concevoir la communication globale à travers la création d’un dossier de presse complet combinant visuels du festival et éléments rédactionnels. Enfin, la campagne a été déclinée sur des supports de merchandising essentiels comme des t-shirts, casquettes et tote bags pour diffuser l’identité de la marque de manière plus organique.",
    resultHeadline: "Un processus créatif fluide soutenu par les meilleurs outils du marché pour un rendu optimal.",
    software: ["Figma", "Photoshop", "Illustrator"],
    images: {
      hero: "/Sample/Bordeaux.png",
      main: "/Sample/Bordeaux.png",
      detail1: "/Sample/totebag.png",
      detail2: "/Sample/casquette.png",
      detail3: "/Sample/tshirt.png",
      detail4: "/Sample/tshirt2.png",

    },
    tags: ["Web Design", "Développement", "Direction Artistique"]
  },
  {
    slug: "Miroir",
    title: "MAM - MIROIR",
    category: "Affiches",
    color: "bg-brand-blue",
    size: "small",
    role: "Designer",
    year: "2025",
    client: "Projet Personnel",
    overview: "Redéfinir la présence digitale d'une marque, en se concentrant sur un storytelling immersif et une intégration fluide.",
    challenge: "Conception d’une affiche promotionnelle pour MIROIR, une exposition fictive au Musée d’Art Moderne de Paris MAM. Le projet repose sur une interprétation visuelle de la fragmentation et de la réflexion, thèmes centraux de l’événement. L'enjeu majeur était de réussir à représenter l’idée du miroir sans tomber dans la répétition littérale. Le défi consistait à délivrer une image percutante qui évoque à la fois la déconstruction artistique et la multiplicité des points de vue, tout en assurant une lisibilité claire des informations pratiques comme les dates, les artistes et le lieu.",
    process: "Le concept visuel s'est développé autour de l'utilisation d'un effet de bris de glace pour fragmenter les portraits de l'affiche, créant ainsi un rythme dynamique qui attire l’œil et invite à la contemplation. Pour la typographie, une police géométrique et futuriste a été sélectionnée pour le titre principal, contrastant avec une police plus classique et élégante pour la liste des artistes invités. L'ensemble s'appuie sur une palette monochrome noir et blanc qui renforce l’aspect institutionnel et intemporel propre aux musées d’art contemporain. Pour finaliser le processus créatif sur Photoshop, le visuel a été intégré sur des supports d’affichage rétro-éclairés dans le métro et dans la rue afin de tester la force d’impact de la composition en milieu urbain.",
    resultHeadline: "Un processus créatif fluide soutenu par les meilleurs outils du marché pour un rendu optimal.",
    software: ["Figma", "Photoshop", "Illustrator"],
    images: {
      hero: "/Miroir/MAM.jpg",
      main: "/Miroir/MAM.jpg",
      detail1: "/Miroir/miroir1.jpg",
      detail2: "/Miroir/miroir2.jpg",
    },
    tags: ["Web Design", "Développement", "Direction Artistique"]
  },
  {
    slug: "PlayboiCarti",
    title: "Magazine PLAYBOI CARTI",
    category: "Affiches",
    color: "bg-brand-blue",
    size: "small",
    role: "Designer",
    year: "2024",
    client: "Projet Personnel",
    overview: "Redéfinir la présence digitale d'une marque, en se concentrant sur un storytelling immersif et une intégration fluide.",
    challenge: "Conception graphique de la couverture et du verso pour un ouvrage biographique consacré à l’artiste Playboi Carti. Ce projet explore l’impact visuel d’un livre de collection à travers une esthétique street-luxe. L’objectif était de créer une identité forte pour cet objet physique. Il fallait réussir à synthétiser l’image publique de l’artiste sur une surface limitée, en intégrant une courte biographie au verso tout en conservant un aspect artistique et épuré.",
    process: "Le travail sur l'image a commencé par l'utilisation d’un effet de grain et de texture papier pour créer un aspect artistique et vintage-moderne à la composition. Pour la typographie, le choix s’est porté sur une police d'empattement structurée pour le titre, créant un contraste élégant avec l’imagerie brute du rappeur. La mise en page du verso a été structurée pour inclure le texte biographique, un portrait de l'artiste ainsi que les codes-barres et logos obligatoires pour un rendu professionnel fidèle aux codes de l’édition. Enfin, le processus s'est achevé sur Photoshop par l'utilisation d’un mockup de livre en volume pour démontrer l’impact visuel de la tranche et la cohérence globale de l’objet une fois en main.",
    resultHeadline: "Un processus créatif fluide soutenu par les meilleurs outils du marché pour un rendu optimal.",
    software: ["Figma", "Photoshop", "Illustrator"],
    images: {
      hero: "/Playboi/face.png",
      main: "/Playboi/face.png",
      detail1: "/Playboi/cover.jpg",
      detail2: "/Playboi/couverture.jpg",
    },
    tags: ["Web Design", "Développement", "Direction Artistique"]
  },
  {
    slug: "Twingo-E-TECH",
    title: "Twingo E-TECH",
    category: "Affiches",
    color: "bg-brand-blue",
    size: "small",
    role: "Designer",
    year: "2026",
    client: "Projet Personnel",
    overview: "Création d'une affiche publicitaire pour le lancement de la nouvelle Renault Twingo E-Tech. L'objectif était de mettre en valeur le design néo-rétro et l'énergie 100% électrique de cette citadine mythique à travers un visuel percutant, moderne et audacieux.",
    challenge: "Le défi principal consistait à moderniser l'image de la Twingo tout en conservant son ADN iconique et accessible. Il fallait concevoir une affiche capable de capter l'attention instantanément en milieu urbain, en illustrant la transition vers l'électrique (E-Tech) de manière dynamique. L'enjeu était de trouver le parfait équilibre entre la mise en valeur du véhicule aux lignes réinventées et une typographie impactante.",
    process: "Le processus créatif a débuté par un travail de composition pour placer le véhicule au centre de l'attention. Un arrière-plan géométrique avec des faisceaux lumineux rouges et blancs a été créé pour évoquer l'énergie électrique et la vitesse. Ensuite, une typographie imposante a été choisie pour les mentions 'TWINGO' et 'E-TECH', en jouant sur les contrastes pour renforcer l'impact visuel. Enfin, l'intégration du texte descriptif et du logo Renault de manière épurée a permis d'équilibrer le visuel, le tout finalisé par des ajustements colorimétriques pour sublimer le rouge éclatant de la carrosserie.",
    resultHeadline: "Un rendu dynamique et moderne, parfaitement aligné avec la nouvelle vision électrique de Renault.",
    software: ["Photoshop", "Illustrator"],
    images: {
      hero: "/Twingo/Etech.jpg",
      main: "/Twingo/Etech.jpg",
      detail1: "/Twingo/Etech.jpg",
      detail2: "/Twingo/twingo1.png",
    },
    tags: ["Web Design", "Développement", "Direction Artistique"]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
