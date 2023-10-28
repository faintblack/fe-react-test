import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
      desc: "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign.",
      date: "19 Dec 2001",
      rating: 4,
    },
    {
      id: 2,
      title: "High and Low",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      desc: "A wealthy businessman is told his son has been kidnapped and he will have to pay a very large sum for him to be returned safely. It is then discovered that his son is safe at home: the kidnapper took his chauffeur's son by accident. The kidnapper says this makes no difference: pay up or the child dies. This leaves him with a moral dilemma, as he really needs the money to conclude a very important business deal.",
      date: "26 Nov 1963",
      rating: 2,
    },
    {
      id: 3,
      title: "High & Low: The Worst X",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMTRhMmJmMmYtZjMzZS00YjY5LWE2MWMtZTc4Mjk4NWE3Njc4XkEyXkFqcGdeQXVyMzI2NzE3MDc@._V1_SX300.jpg",
      desc: "The film is set 3 years after the events of 'High and Low: The Worst' which follows the rivalry between Oya High's street fighters and delinquents of Housen Academy.",
      date: "09 Sep 2022",
      rating: 5,
    },
    {
      id: 4,
      title: "The Raid 2",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BZWExZWQ0ZmItM2VmZC00YjBhLTk2MzctNWRiNzhmZTEwNmYwXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
      desc: "He thought it was over. After fighting his way out of a building filled with gangsters and madmen - a fight that left the bodies of police and gangsters alike piled in the halls - rookie Jakarta cop Rama thought it was done and he could resume a normal life. He couldn't have been more wrong. Formidable though they may have been, Rama's opponents in that fateful building were nothing more than small fish swimming in a pond much larger than he ever dreamed possible. And his triumph over the small fry has attracted the attention of the predators farther up the food chain. His family at risk, Rama has only one choice to protect his infant son and wife: He must go undercover to enter the criminal underworld himself and climb through the hierarchy of competing forces until it leads him to the corrupt politicians and police pulling the strings at the top of the heap. And so Rama begins a new odyssey of violence, a journey that will force him to set aside his own life and history and take on a new identity as the violent offender \"Yuda.\" In prison he must gain the confidence of Uco - the son of a prominent gang kingpin - to join the gang himself, laying his own life on the line in a desperate all-or-nothing gambit to bring the whole rotten enterprise to an end.",
      date: "11 Apr 2014",
      rating: 5,
    },
    {
      id: 5,
      title: "John Wick",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
      desc: "With the untimely death of his beloved wife still bitter in his mouth, John Wick, the expert former assassin, receives one final gift from her--a precious keepsake to help John find a new meaning in life now that she is gone. But when the arrogant Russian mob prince, Iosef Tarasov, and his men pay Wick a rather unwelcome visit to rob him of his prized 1969 Mustang and his wife's present, the legendary hitman will be forced to unearth his meticulously concealed identity. Blind with revenge, John will immediately unleash a carefully orchestrated maelstrom of destruction against the sophisticated kingpin, Viggo Tarasov, and his family, who are fully aware of his lethal capacity. Now, only blood can quench the boogeyman's thirst for retribution.",
      date: "24 Oct 2014",
      rating: 3,
    },
    {
      id: 6,
      title: "Fast & Furious 6",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
      desc: "Since Dom (Diesel) and Brian's (Walker) Rio heist toppled a kingpin's empire and left their crew with $100 million, our heroes have scattered across the globe. But their inability to return home and living forever on the lam have left their lives incomplete. Meanwhile, Hobbs (Johnson) has been tracking an organization of lethally skilled mercenary drivers across 12 countries, whose mastermind (Evans) is aided by a ruthless second-in-command revealed to be the love Dom thought was dead, Letty (Rodriguez). The only way to stop the criminal outfit is to outmatch them at street level, so Hobbs asks Dom to assemble his elite team in London. Payment? Full pardons for all of them so they can return home and make their families whole again.",
      date: "24 May 2013",
      rating: 4,
    },
    {
      id: 7,
      title: "Drumline",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BNzhhY2Y3NDktM2JiYi00YmY0LWEzOGQtMDc4Yzk3ZWIxOTVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      desc: "A fish-out-of-water comedy about a talented street drummer from Harlem who enrolls in a Southern university, expecting to lead its marching band's drumline to victory. He initially flounders in his new world, before realizing that it takes more than talent to reach the top.",
      date: "13 Dec 2002",
      rating: 4,
    },
    {
      id: 8,
      title: "SuckSeed",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BYTEwZTdjNmYtOWI4Ni00YThhLTk3ZGEtYjJhYTEyOWY4MTY2XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
      desc: "Ped (Jirayu La-ongmanee) is a shy boy who never listened to music until would-be childhood crush Ern (Nattasha Nualjam) introduced him to the world of Pop and Rock. But she left for Bangkok soon after, and it's six years later, in their final school year, before she's reintroduced to Ped and his brash best friend Koong (Pachara Chirathivat). Koong convinces Ped, along with schoolmate Ex (Thawat Pornrattanaprasert), to form a band, partly to be cool and attract girls, partly so Koong can try to one-up his popular twin brother Kay. Their musical talents aren't great, but that doesn't stop them from trying. However, when Ern decides to lend them her outstanding guitar skills, Ped and Koong's shared attraction to her puts a strain on the band's survival, as well as their friendship.",
      date: "17 Mar 2011",
      rating: 4,
    },
    {
      id: 9,
      title: "Turbo",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMTA4NTgwMjM5MzheQTJeQWpwZ15BbWU3MDg2ODA1ODk@._V1_SX300.jpg",
      desc: "After a freak accident infuses him with the power of super-speed, Turbo kicks into overdrive and embarks on an extraordinary journey to achieve the seemingly impossible: competing in the world's fastest race, the Indianapolis 500. With the help of his tricked-out streetwise snail crew, this ultimate underdog puts his heart and shell on the line to prove that no dream is too big, and no dreamer too small.",
      date: "17 Jul 2013",
      rating: 4,
    },
    {
      id: 10,
      title: "One Piece: Stampede",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BM2MxY2QwYTAtMDM1My00MTc0LWEwZjktMDdjODY2NWJiNDg2XkEyXkFqcGdeQXVyODY3ODQ2MTk@._V1_SX300.jpg",
      desc: "Pirates from around the world gather at the Pirates Expo to join the hunt for Gol D. Roger's lost treasure.",
      date: "24 Oct 2019",
      rating: 5,
    },
    {
      id: 11,
      title: "Step Up All In",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMTUzMjUyODA1Nl5BMl5BanBnXkFtZTgwMjIwNTQ5MTE@._V1_SX300.jpg",
      desc: "Sean brings his dance crew known as The Mob to Los Angeles to try and make it. But they haven't had much luck, eventually the Mob decides it's time to go back to Miami but Sean decides to stay. He learns of a dance competition is Las Vegas wherein the winner will get a three year contract. Sean needs a new crew so he asks fellow dancer Moose for help. And Moose introduces him to Andie, another friend and dancer who got injured a few years ago and is now ready to get back in. He recruits some other friends and they head Las Vegas as LMNTRIX. When they get there, they discover that the Mob too is also there, which is very touchy for Sean.",
      date: "08 Aug 2014",
      rating: 4,
    },
    {
      id: 12,
      title: "KKN di Desa Penari",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BYjBjM2Y5YWEtNTgyMi00MzcwLThkYTctYzZmY2FkNjZjZTRjXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
      desc: "A man known as Simpleman, got a scary story. Starting from 5 students who had to carry out KKN in a remote village, Nur (Tissa Biani), Widya (Adinda Thomas), Ayu (Aghniny Haque), Bima (Achmad Megantara), Anton (Calvin Jeremy) and Wahyu (M. Fajar Nugraga) never thought that the village they chose was not an ordinary village. Pak Prabu (Kiki Narendra) the village head warns them not to cross the boundary of the forbidden gate, a gate leading to the footprint. The mysterious place may have something to do with the figure of a beautiful dancer who began to disturb Nur and also Widya. One by one began to feel the strangeness of the village. Bima began to change his attitude. Their KKN program is a mess, it seems that the unseen inhabitants of the village don't like them. Nur finally found an astonishing fact that one of them violated the most fatal rules in the village. The terror of the mysterious dancer figure became even more frightening, they tried to ask the help of Mbah Buyut (Diding Boneng) the local shaman, but it was too late, they threatened they would not be able to return safely from the village known as the dancer's village.",
      date: "30 Apr 2022",
      rating: 3,
    },
    {
      id: 13,
      title: "Satan's Slaves",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BYjU5NjYyNzQtZDQ3Ny00Y2FkLWIyZGYtNzM5YzM3NDdjMjUxXkEyXkFqcGdeQXVyMzYzOTYxNzM@._V1_SX300.jpg",
      desc: "The family of Rini is financially broken and she lives with her father, her mother that is ill, her grandmother that is crippled, and her brothers Tony, Bondi and the mute six year-old Ian in an old house in the countryside nearby a cemetery. Her mother, who was a successful singer, is dying from a mysterious disease and her father does not have money to support the family. When her mother dies, her father needs to travel to the city to sell the house and weird things happen in the house. The skeptical Rini befriends Hendra, son of the religious Ustadz, and they learn that her mother was infertile and joined a cult that worships Satan to have children. And now, when Ian will be seven, they will take the boy with them. What can they do to protect Ian?",
      date: "28 Sep 2017",
      rating: 5,
    },
  ],
  counter: 0,
};

export const movieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    updateRating: (state, action) => {
      const getIndex = state.data.findIndex(
        (obj) => obj.id === action.payload.id
      );

      state.data[getIndex].rating = action.payload.rating;
    },
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addMovie,
  increment,
  decrement,
  incrementByAmount,
  updateRating,
} = movieReducer.actions;

export default movieReducer.reducer;
