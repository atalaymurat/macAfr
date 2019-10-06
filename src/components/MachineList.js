import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Badge} from 'reactstrap';

class MachineList extends Component {
  render() {
    return (
      <div>
        <h3>
          <Badge className="mr-2" color="primary">Machines</Badge>
          <Badge color="success">{this.props.currentCategory.category}</Badge>
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}

export default connect(mapStateToProps)(MachineList);
