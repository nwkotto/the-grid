require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ContentBoard from './grid/ContentBoard.js';
import TextView from './content-views/TextView.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    let { tiles } = props;
    this.state = {
      tiles
    }
  }
  componentDidMount() {
    let tiles = [
      {
        'row': 0,
        'col': 0,
        'name': 'Dom, Lomp en Famous',
        'description': 'Sletjes da, sletjes da'
      },
      {
        'row': 2,
        'col': 2,
        'name': 'Wir Ernten Was wir Sahen',
        'description': 'Du weisst nicht?'
      },
      {
        'row': -1,
        'col': -1,
        'name': 'Jimmy Woo',
        'description': 'Yooooooo'
      },
      {
        'row': -1,
        'col': -2,
        'name': 'Ayyy',
        'description': 'LMAO'
      }
    ];
    this.setState({
      'tiles': tiles
    });
  }
  render() {
    let Board = ContentBoard(TextView);
    return (
      <div className='index'>
        <Board tiles={this.state.tiles} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
  'tiles': []
};

export default AppComponent;
