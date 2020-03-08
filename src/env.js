import * as Icons from 'react-icons/gi';

export const DIFFICULTIES = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD',
};

export const STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  FINISHED: 'FINISHED',
  STARTED: 'STARTED',
  TIME_IS_OVER: 'TIME_IS_OVER',
};

export const DIFFICULTIES_META = {
  EASY: {
    TIME: 25,
    CARDS: 6,
    CARD_WIDTH: 30,
  },
  MEDIUM: {
    TIME: 45,
    CARDS: 8,
    CARD_WIDTH: 20,
  },
  HARD: {
    TIME: 45,
    CARDS: 12,
    CARD_WIDTH: 15,
  },
};

// https://react-icons.netlify.com/#/icons/gi
export const CARDS = [
  {
    component: Icons.GiSpiderAlt,
    name: 'spider',
  },

  {
    component: Icons.GiBatMask,
    name: 'bat-mask',
  },

  {
    component: Icons.GiHouse,
    name: 'house',
  },

  {
    component: Icons.GiTv,
    name: 'tv',
  },

  {
    component: Icons.GiUnicorn,
    name: 'unicorn',
  },

  {
    component: Icons.GiAnchor,
    name: 'anchor',
  },

  {
    component: Icons.GiFireAxe,
    name: 'axe',
  },

  {
    component: Icons.GiOpenBook,
    name: 'book',
  },

  {
    component: Icons.GiOctopus,
    name: 'octopus',
  },

  {
    component: Icons.GiBrickWall,
    name: 'brickWall',
  },

  {
    component: Icons.GiCamel,
    name: 'camel',
  },

  {
    component: Icons.GiCarrot,
    name: 'carrot',
  },

  {
    component: Icons.GiCityCar,
    name: 'car',
  },

  {
    component: Icons.GiMoon,
    name: 'moon',
  },

  {
    component: Icons.GiTank,
    name: 'tank',
  },
  {
    component: Icons.GiTrident,
    name: 'trident',
  },
  {
    component: Icons.GiFlamer,
    name: 'flame',
  },
  {
    component: Icons.GiHelp,
    name: 'help',
  },

  {
    component: Icons.GiRetroController,
    name: 'controller',
  },

  {
    component: Icons.GiHearts,
    name: 'heart',
  },

  {
    component: Icons.GiBattery100,
    name: 'battery',
  },

  {
    component: Icons.GiInvertedDice6,
    name: 'dice',
  },

  {
    component: Icons.GiWhiteCat,
    name: 'cat',
  },

  {
    component: Icons.GiSpray,
    name: 'spray',
  },

];
