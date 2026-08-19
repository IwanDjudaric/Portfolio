/* Site content per locale. Project titles, the tech stacks and the social
   network names stay untranslated on purpose: they are proper nouns. */

export const LOCALES = ['en', 'nl']

export const copy = {
  en: {
    label: 'English',
    nav: { work: 'Work', about: 'About', contact: 'Contact' },
    hero: {
      index: 'Index',
      role: 'Software Developer',
      lede: "I'm a developer who enjoys turning ideas into clean, functional products. I care about writing code that's simple to read and easy to maintain, and I'm always looking for ways to expand on my skills. When I'm not coding, I enjoy exploring new technologies and techniques because they interest me.",
      based: 'Based / Zuid-Holland, Netherlands',
    },
    work: {
      index: 'Work',
      sub: 'Selected Projects',
    },
    projects: [
      {
        tag: 'Web Game',
        desc: 'A game about saving a penguin by stopping the ice caps from melting before the timer runs out. Built with 2 friends during a 3-day makeathon.',
      },
      {
        tag: 'CRUD Website',
        desc: 'A padel tennis tournament site to track a tournament and its players, with match outcomes and player data. Built with 1 other developer.',
      },
      {
        tag: 'Unity Game',
        desc: 'Tracks one of your hands through the camera. Open your hand to drop a marble into an on-screen bowl. First to 10 wins. A solo prototype exploring motion tracking.',
      },
      {
        tag: 'CRUD Site',
        desc: 'A blog site with user authentication where each account can privately register, post, and update their own blog entries.',
      },
    ],
    about: {
      index: 'About',
      text: "My interest in development goes back to being a kid who wanted to build games in Roblox. That curiosity resurfaced when I started studying Creative Software Development at Grafisch Lyceum Rotterdam, and that's where things properly took off. Since then I've gravitated toward projects that push me somewhere new: a different framework, a different language, a problem I haven't tackled before. Right now that means working toward my first full game, with the goal of eventually shipping it on Steam. Outside of code I produce music, and it scratches the same itch as picking up new tech: I like taking something apart to understand how it works, then building it back up.",
      facts: [
        { term: 'Focus', value: 'Full-Stack Development' },
        {
          term: 'Tools',
          value:
            'React, TypeScript/JavaScript, PHP, Laravel, Unity, Three.js, Bootstrap',
        },
        { term: 'Education', value: 'Grafisch Lyceum Rotterdam, 2024 – Present' },
      ],
    },
    contact: { index: 'Contact' },
    langToggle: 'Switch language',
  },

  nl: {
    label: 'Nederlands',
    nav: { work: 'Werk', about: 'Over', contact: 'Contact' },
    hero: {
      index: 'Index',
      role: 'Software Developer',
      lede: 'Ik ben een ontwikkelaar die er plezier in heeft om ideeën om te zetten in strakke, functionele producten. Ik hecht waarde aan code die makkelijk te lezen en te onderhouden is, en ik ben altijd op zoek naar manieren om mijn vaardigheden uit te breiden. Als ik niet aan het programmeren ben, verdiep ik me graag in nieuwe technologieën en technieken, simpelweg omdat ze me interesseren.',
      based: 'Gevestigd / Zuid-Holland, Nederland',
    },
    work: {
      index: 'Werk',
      sub: 'Geselecteerde Projecten',
    },
    projects: [
      {
        tag: 'Webgame',
        desc: 'Een game waarin je een pinguïn redt door het smelten van de ijskappen te stoppen voordat de tijd om is. Gemaakt met 2 vrienden tijdens een driedaagse makeathon.',
      },
      {
        tag: 'CRUD-website',
        desc: 'Een padel-toernooisite om een toernooi en de spelers bij te houden, met wedstrijduitslagen en spelersgegevens. Gemaakt met 1 andere ontwikkelaar.',
      },
      {
        tag: 'Unity-game',
        desc: 'Volgt één van je handen via de camera. Open je hand om een knikker in een bak op het scherm te laten vallen. De eerste tot 10 wint. Een soloprototype om motion tracking te verkennen.',
      },
      {
        tag: 'CRUD-site',
        desc: 'Een blogsite met gebruikersauthenticatie waar gebruikers een account kunnen aanmaken en privé hun eigen blogberichten kunnen plaatsen en bijwerken.',
      },
    ],
    about: {
      index: 'Over',
      text: 'Mijn interesse in ontwikkeling gaat terug naar mijn jeugd, toen ik games wilde bouwen in Roblox. Die nieuwsgierigheid kwam weer boven toen ik Creative Software Development ging studeren aan het Grafisch Lyceum Rotterdam, en daar kwam het pas echt op gang. Sindsdien voel ik me aangetrokken tot projecten die me iets nieuws laten doen: een ander framework, een andere taal, een probleem dat ik nog niet eerder heb aangepakt. Op dit moment werk ik aan mijn eerste volledige game, met als doel die uiteindelijk op Steam uit te brengen. Naast het programmeren maak ik muziek, en dat kriebelt op dezelfde manier als het oppikken van nieuwe technologie: ik haal graag iets uit elkaar om te snappen hoe het werkt, en bouw het dan weer op.',
      facts: [
        { term: 'Focus', value: 'Full-stack development' },
        {
          term: 'Tools',
          value:
            'React, TypeScript/JavaScript, PHP, Laravel, Unity, Three.js, Bootstrap',
        },
        { term: 'Opleiding', value: 'Grafisch Lyceum Rotterdam, 2024 – heden' },
      ],
    },
    contact: { index: 'Contact' },
    langToggle: 'Taal wisselen',
  },
}

/* Locale-independent project facts, merged with the translated bits above. */
export const projectMeta = [
  { n: '01', title: 'Ice To Meet You', year: '2026', tech: 'React, JavaScript' },
  { n: '02', title: 'King Of The Court', year: '2026', tech: 'PHP, phpMyAdmin' },
  { n: '03', title: 'MotionHand', year: '2026', tech: 'Unity, C#' },
  { n: '04', title: 'Blog', year: '2026', tech: 'Laravel' },
]
