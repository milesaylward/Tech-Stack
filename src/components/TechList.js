import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class TechList extends Component {
  /*
  data source boiler plate to make use of
  listview component from react-native
  ensures only visible components are rendered
  */

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

/*
mapStateToProps takes our state and provides the state
as a prop to our component
*/

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

/*
Connect tags return a function that are immediately invoked ex:
this connects component to state provided by redux
*/

export default connect(mapStateToProps)(TechList);
