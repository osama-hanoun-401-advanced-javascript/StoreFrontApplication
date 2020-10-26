import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/products';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


//TODO: Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it

const Categories = props => {
  const classes = useStyles();
  let categoriesToMap = props.category.categories;
  // console.log('MAP???', categoriesToMap);

  return (
    <>
      <div className={classes.root}>

        <h2>My Categories component.</h2>
        <ul>
          {categoriesToMap.map(category => {
            return (
              <Button variant="contained" color="primary"
                key={category.displayName}
                onClick={() => props.changeActiveCategory(category)}
              >
                {category.displayName}
              </Button>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    category: state.categories, // maybe change this
  };
};

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);