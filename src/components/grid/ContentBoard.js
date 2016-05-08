'use strict';

import React from 'react';
import ContentTile from './ContentTile.js'

require('styles/grid/ContentBoard.styl');

function ContentBoard(defaultContentView) {
  class ContentBoardComponent extends React.Component {
    boardBounds() {
      return this.props.tiles.reduce(function(bounds, tile) {
        console.log(tile);
        bounds.minRow = tile.row < bounds.minRow ? tile.row : bounds.minRow;
        bounds.maxRow = tile.row > bounds.maxRow ? tile.row : bounds.maxRow;
        bounds.minCol = tile.col < bounds.minCol ? tile.col : bounds.minCol;
        bounds.maxCol = tile.col > bounds.maxCol ? tile.col : bounds.maxCol;
        return bounds;
      }, {'minRow': 0, 'maxRow': 0, 'minCol': 0, 'maxCol': 0});
    }
    boardStyles() {
      let tileWidth = this.props.config.tileWidth,
        tileHeight = this.props.config.tileHeight,
        boardBounds = this.boardBounds();
      console.log(boardBounds);
      return {
        'width': (boardBounds.maxCol + 1) * tileWidth,
        'height': (boardBounds.maxRow + 1) * tileHeight,
        'marginLeft': Math.abs(boardBounds.minCol) * tileWidth,
        'marginTop': Math.abs(boardBounds.minRow) * tileHeight
      }
    }
    tileKey(tile) {
      return `${tile.name}-(${tile.row},${tile.col})`;
    }
    render() {
      let that = this;
      let tiles = this.props.tiles.map(function(tile) {
        let ContentView = tile.view || defaultContentView;
        let TileView = ContentTile(ContentView);
        return (
          <TileView key={that.tileKey(tile)} width={that.props.config.tileWidth} height={that.props.config.tileHeight} {...tile} />
        )
      });
      console.log(tiles);
      return (
        <div className="content-board" style={this.boardStyles()}>
          {tiles}
        </div>
      );
    }
  }

  ContentBoardComponent.displayName = 'GridContentBoard';
  ContentBoardComponent.defaultProps = {
    'config': {
      'tileWidth': 300,
      'tileHeight': 200,
      'tiles': []
    }
  };
  // ContentBoard.propTypes = {};

  return ContentBoardComponent;
}

export default ContentBoard;
