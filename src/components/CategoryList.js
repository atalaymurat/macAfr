import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../actions/categoryActions';
import {Badge, ListGroup, ListGroupItem} from 'reactstrap';

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = cat => {
    this.props.actions.changeCategory(cat);
  };
  categoriesFilter = list => {
    return list.filter(cat => cat.category !== '');
  };
  render() {
    return (
      <div>
        <h3>
          <Badge className="mr-2" color="primary">
            Categories
          </Badge>
          <Badge className="mr-2" color="primary">
            {this.categoriesFilter(this.props.categories).length}
          </Badge>
        </h3>
        <ListGroup>
          {this.categoriesFilter(this.props.categories).map(cat => {
            return (
              <ListGroupItem
                key={cat.id}
                onClick={() => this.selectCategory(cat)}
                active={cat.id === this.props.currentCategory.id}>
                {cat.category}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch,
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch,
      ),
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryList);
