import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { add, readAllProduct } from '../../store/actions';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Products = props => {
  useEffect(() => {
    props.readAllProduct();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>A list of all my cool products:</h2>
      <ul>
        {props.productsToDisplay.map(product => {
          return <li onClick={() => props.addItemToCart(product)} key={product.name} >
            <Button variant="contained" color="primary">{product.name}
            </Button></li>;
        })}
      </ul>
    </div >
  );
};

const mapDispatchToProps = { addItemToCart: add, readAllProduct };
const mapStateToProps = state => {
  return {
    productsToDisplay: state.products.productsToDisplay,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
