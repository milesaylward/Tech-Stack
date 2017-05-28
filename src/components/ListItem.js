import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    const { textStyle } = styles;

    if (expanded) {
      return (
        <CardItem>
          <Text style={textStyle}>
            {library.description}
          </Text>
        </CardItem>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardItem>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardItem>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  textStyle: {
    paddingLeft: 15,
    paddingRight: 10
  }
};

/*
ownProps is equal to this.props inside of Component
using ownProps allows us to remove all logic from the Component
and test if it should be expanded in the mapStateToProps function
*/

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedId === ownProps.library.id;

  return { expanded };
};
/*
second argument takes all actions creators
and passes them into the Component as a prop
*/

export default connect(mapStateToProps, actions)(ListItem);
