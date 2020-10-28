import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory, getCategories } from '../../store/actions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



const Categories = props => {
  const classes = useStyles();
  let categoriesToMap = props.category.categories;
  useEffect(() => {
    props.getCategories();
  }, [props.getCategories]);
  return (
    <>
      <div className={classes.root}>

        <h2>My Categories component.</h2>
        <ul>
          {categoriesToMap.map(category => {
            return (
              <Button variant="contained" color="primary"
                key={category.name}
                onClick={() => props.changeActiveCategory(category)}
              >
                {category.name}
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
    category: state.categories,
  };
};

const mapDispatchToProps = { changeActiveCategory, getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
