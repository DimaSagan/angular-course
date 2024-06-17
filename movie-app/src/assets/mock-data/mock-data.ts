interface moviesData {
  imgPath: string,
  title: string,
  description: string,
  year: string,
  director: string,
  actors: string,
  rate: string,
  runtime?: number,
  seasons?: number
}
export const MoviesData: moviesData[] = [
  {
    imgPath: 'assets/img/oppenheimer.webp',
    title: 'Oppenheimer',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    year: '2023',
    director: 'Christopher Nolan',
    actors: 'Cillian Murphy, Emily Blunt, Matt Damon',
    rate: '8.1',
    runtime: 187
  },
  {
    imgPath: 'assets/img/dune.webp',
    title: 'Dune',
    description: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions of a dark future.',
    year: '2021',
    director: 'Denis Villeneuve',
    actors: 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac',
    rate: '8.2',
    runtime: 155
  },
  {
    imgPath: 'assets/img/severance.webp',
    title: 'Severance',
    description: 'Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.',
    year: '2022',
    director: 'Dan Erickson',
    actors: '	Adam Scott, Zach Cherry, Britt Lower',
    rate: '8.7',
    seasons: 1
  },
  {
    imgPath: 'assets/img/fallout.webp',
    title: 'Fallout',
    description: 'In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.',
    year: '2024',
    director: 'Chaz Hawkins, Geneva Robertson-Dworet',
    actors: 'Ella Purnell, Aaron Moten, Walton Goggins',
    rate: '8.4',
    seasons: 1
  },
  {
    imgPath: 'assets/img/tarot.webp',
    title: 'Tarot',
    description: 'When a group of friends recklessly violates the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.',
    year: '2024',
    director: 'Spenser Cohen, Anna Halberg',
    actors: 'Harriet Slater, Adain Bradley',
    rate: '4.8',
    runtime: 92
  },
  




  
]