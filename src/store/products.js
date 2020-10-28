
// count	7
// results	
//   0	
//    _id	"5f1a5f861910080017657ed7"
//    name	"Carrots"
//    category	"food"
//    inStock	980
//    price	100.1
const initialState = {
  products: [
    {
      name: 'egg cooker',
      category: 'kitchen',
      description: 'it cooks eggs!',
      price: '$15',
      inventory: 10,
    },
    {
      name: 'the baconator',
      category: 'kitchen',
      description: 'bacon!!',
      price: '$24',
      inventory: 5,
    },
    {
      name: 'nintendo switch',
      category: 'electronics',
      description: 'an instant classic',
      price: '$299',
      inventory: 1,
    },
    {
      name: 'the coolest stapler',
      category: 'office',
      description: 'I believe someone still has it',
      price: '$1',
      inventory: 1,
    },
  ],
  productsToDisplay: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  console.log('in product ACTION???', action);

  switch (type) {
    case 'change':
      let targetCategory = payload.name;
      let productsToDisplay = state.products.filter(product => {
        return product.category === targetCategory;
      });
      // console.log('DISPLAY PRODS', productsToDisplay);
      return { ...state, productsToDisplay };
    case 'UPDATE_PRODUCTS':
      return { ...state, productsToDisplay };

    default:
      return state;
  }
};

//TODO define action creators (functions that give us the ACTION OBJECT)
