import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 10;

const initialState = [
  {
    title: "TODO",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "this is a card"
      },
      {
        id: `card-${1}`,
        text: "this is the second card"
      }
    ]
  },
  {
    title: "DOING",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "doing card 1"
      },
      {
        id: `card-${3}`,
        text: "doing card 2"
      }
    ]
  },
  {
    title: "DONE",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${4}`,
        text: "done this is a card"
      },
      {
        id: `card-${5}`,
        text: "done this is the second card"
      },
      {
        id: `card-${6}`,
        text: "done this is the second card"
      }
    ]
  },
  {
    title: "REJECTED",
    id: `list-${3}`,
    cards: [
      {
        id: `card-${7}`,
        text: "rejected done this is a card"
      },
      {
        id: `card-${8}`,
        text: "rejected done this is the second card"
      },
      {
        id: `card-${9}`,
        text: "rejected done this is the second card"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload.text, ///here
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text, ///here
        id: `card-${cardID}`
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          ////here
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload;
      const newState = [...state];
      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // not in the same list
      if (droppableIdStart !== droppableIdEnd) {
        // list where drag happened
        const listStart = state.find(list => droppableIdStart === list.id);
        //pulling out the card from the list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        //finiding list where drag ended
        const listEnd = state.find(list => droppableIdEnd === list.id);

        //put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listReducer;
