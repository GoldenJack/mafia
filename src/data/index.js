import { classes, skills } from '../constants';

export const defaultDeck = {
  title: 'Стандартная колода',
  img: '',
  quantityCards: 32,
  cards: [
    {
      id: 1,
      class: classes.CIVILIAN,
      skillDescription: 'Ночью спит. Днем голосует со всеми',
      heroName: 'Обыватель',
      skill: skills.COMMONER,
      health: 1,
      image: '',
      wakeUpOrder: 32
    },


    {
      id: 8,
      class: classes.CIVILIAN,
      skillDescription: 'Ночью выбирает другого игрока (или себя).' +
        'Цель не может быть убита этой ночью.' +
        'Нельзя лечить одного и того же игрока две ночи подряд',
      heroName: 'Журналист',
      skill: skills.DOCTOR,
      health: 1,
      image: '',
      wakeUpOrder: 2
    },

    {
      id: 17,
      class: classes.CRIME,
      skillDescription: 'Ночью вместе с другими бандитами устраняет неугодных горожан.' +
        'Днем притворяется законопослушным гражданином',
      heroName: 'Мафиози',
      skill: skills.MAFIA,
      health: 1,
      image: '',
      wakeUpOrder: 4
    },

    {
      id: 30,
      class: classes.LONELY,
      skillDescription: 'Ночью может убить одного игрока.' +
        'Побеждает, если в начале дня остался один на один с последним выжившим',
      heroName: 'Маньяк',
      skill: skills.MANIAC,
      health: 1,
      image: '',
      wakeUpOrder: 9
    },
  ],
};
