export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  headerIcon: 'crow',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },

  {
    id: 'list-2',
    title: 'Second list to do <sup>soon!</sup>',
    description: 'I want to check out!',
    image: 'https://i.postimg.cc/7LXnG05H/kisspng-illustration-product-design-clip-art-creative-work-by-higeryan-dribbble-5bff7da2042c76-64737.png',
  },

  {
    id: 'list-3',
    title: 'Third list <sup>soon!</sup>',
    description: 'check out!',
    image: 'https://i.postimg.cc/598Tykxb/chinese-festival-3406583-2911998.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    listId: 'list-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    index: 0,
  },
  {
    id: 'card-2',
    listId: 'list-1',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    index: 1,
  },
  {
    id: 'card-3',
    listId: 'list-1',
    columnId: 'column-2',
    title: 'Harry Potter',
    index: 0,
  },
  {
    id: 'card-4',
    listId: 'list-1',
    columnId: 'column-2',
    title: 'Star Wars',
    index: 1,
  },
  {
    id: 'card-5',
    listId: 'list-1',
    columnId: 'column-3',
    title: 'The Witcher',
    index: 0,
  },
  {
    id: 'card-6',
    listId: 'list-1',
    columnId: 'column-3',
    title: 'Skyrim',
    index: 1,
  },
];

export const faqData = {
  title: 'FAQ',
  image: 'https://i.postimg.cc/598Tykxb/chinese-festival-3406583-2911998.png',
};

export const infoData = {
  title: 'Info',
  image: 'https://i.postimg.cc/7LXnG05H/kisspng-illustration-product-design-clip-art-creative-work-by-higeryan-dribbble-5bff7da2042c76-64737.png',
};

export const searchResult = {
  title: 'Results',
  image: 'https://i.postimg.cc/7LXnG05H/kisspng-illustration-product-design-clip-art-creative-work-by-higeryan-dribbble-5bff7da2042c76-64737.png',
  description: 'cards with search letter(s)',
};

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
