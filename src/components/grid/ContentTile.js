'use strict';

import React from 'react';

require('styles/grid/ContentTile.styl');

function ContentTile(Component) {
  class ContentTileComponent extends React.Component {
    tileStyles() {
      let styles = {
        'width': this.props.width,
        'height': this.props.height,
        'left': this.props.col * this.props.width,
        'top': this.props.row * this.props.height
      };
      return styles;
    }
    render() {
      return (
        <div className="content-tile" style={this.tileStyles()}>
          <Component {...this.props} />
        </div>
      );
    }
  }

  ContentTileComponent.displayName = 'GridContentTile';
  return ContentTileComponent;
}

// Uncomment properties you need
// ContentTile.propTypes = {};
// ContentTile.defaultProps = {};

export default ContentTile;
