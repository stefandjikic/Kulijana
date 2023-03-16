export const MAIN_NAV = [
  {
    id: 1,
    title: "Početna",
    route: "/",
    subLinks: null,
  },
  {
    id: 2,
    title: "IT",
    route: "/it",
    subLinks: null,
    // subLinks: [
    //   {
    //     title: "Servisi i Softver",
    //     route: "/it/softver",
    //   },
    //   {
    //     title: "Uređaji",
    //     route: "/it/uredjaji",
    //   },
    //   {
    //     title: "Internet",
    //     route: "/it/internet",
    //   },
    // ],
  },
  {
    id: 3,
    title: "Nauka i Tehnologija",
    route: "/nauka-i-tehnologija",
    subLinks: null,
  },
  {
    id: 4,
    title: "Biz",
    route: "/biz",
    subLinks: null,
  },
  {
    id: 5,
    title: "Kultura",
    route: "/kultura",
    subLinks: [
      {
        id: 5.1,
        title: "Film",
        route: "/film",
      },
      {
        id: 5.2,
        title: "Muzika",
        route: "/muzika",
      },
      {
        id: 5.3,
        title: "Umetnost",
        route: "/umetnost",
      },
      // {
      //   title: "Književnost",
      //   route: "/kultura/književnost",
      // },
    ],
  },
  {
    id: 6,
    title: "Zanimljivosti",
    route: "/zanimljivosti",
    subLinks: [
      {
        id: 6.1,
        title: "Istorija",
        route: "/istorija",
      },
      {
        id: 6.2,
        title: "Društvo",
        route: "/drustvo",
      },
      {
        id: 6.3,
        title: "Svet oko nas",
        route: "/svet-oko-nas",
      },
    ],
  },
  {
    id: 7,
    title: "Magazin",
    route: "/magazin",
    subLinks: [
      {
        id: 7.1,
        title: "Lifestyle",
        route: "/lifestyle",
      },
      {
        id: 7.2,
        title: "Trening kutak",
        route: "/trening-kutak",
      },
    ],
  },
  {
    id: 8,
    title: "Putovanja",
    route: "/putovanja",
    subLinks: null,
  },
  {
    id: 9,
    title: "Da li ste znali?",
    route: "/da-li-ste-znali",
    subLinks: null,
  },
];

export const ARTICLES_PER_PAGE = 10;