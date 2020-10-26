const initialState = {
  categories: [
    {
      name: 'kitchen',
      displayName: 'kitchen',
      description: 'stuff for the kitchen!',
    },
    {
      name: 'office',
      displayName: 'office',
      description: 'cool paper and stuff!',
    },
    {
      name: 'electronics',
      displayName: 'electronics',
      description: 'electronic stuff!',
    },
  ],
  activeCategory: 'kitchen',
};



export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'change':
      let activeCategory = payload.name;
      return { ...state, activeCategory };
    default:
      return state;
  }
};
