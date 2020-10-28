// {
//   "count": 2,
//     "results": [
//       {
//         "_id": "5f0cdc15acac790017fc26ce",
//         "name": "food",
//         "description": "Stuff for you to eat",
//         "__v": 0
//       },
//       { "_id": "5f0cdc25acac790017fc26cf", "name": "electronics", "description": "Making your life easier, one volt at a time", "__v": 0 }
//     ]
// }
const initialState = {
  categories: [],
  activeCategory: 'food',
};



export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'READ_CATEGORIES':
      console.log('READ_CATEGORIES,payload ', payload)
      return { ...state, categories: payload };
    case 'change':
      let activeCategory = payload.name;
      return { ...state, activeCategory };
    default:
      return state;
  }
};
