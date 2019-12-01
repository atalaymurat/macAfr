import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Badge} from 'reactstrap';
import {bindActionCreators} from 'redux';
import * as machineActions from '../actions/machineActions';
import {
  Card,
  CardDeck,
  CardSubtitle,
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  Col,
  CardFooter,
  Button,
} from 'reactstrap';

class MachineList extends Component {
  componentDidMount() {
    this.props.actions.getMachines();
  }
  render() {
    return (
      <div>
        <h3>
          <Badge className="mr-2" color="primary">
            Machines
          </Badge>
          <Badge color="success">{this.props.currentCategory.category}</Badge>
        </h3>
            {this.props.machines.map(mac => (
              <Card className="mb-2" key={mac.id}>
              <CardBody>
                <CardTitle>{mac.title}</CardTitle>
                <CardSubtitle>category id : { mac.category_id } </CardSubtitle>
                <CardText>
                  {mac.description}
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    machines: state.machineListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMachines: bindActionCreators(machineActions.getMachines, dispatch),
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MachineList);
