
// count	7
// results	
//   0	
//    _id	"5f1a5f861910080017657ed7"
//    name	"Carrots"
//    category	"food"
//    inStock	980
//    price	100.1
const initialState = {
  products: [],
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
    case 'READ_ALL_PRODUCTS':
      return { ...state, products: payload };
    default:
      return state;
  }
};

//TODO define action creators (functions that give us the ACTION OBJECT)
