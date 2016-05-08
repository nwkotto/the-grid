'use strict';

import React from 'react';

require('styles/content-views/TextView.styl');

class TextView extends React.Component {
  render() {
    return (
      <div className="text-view">
        <h2>{this.props.name}</h2>
        <p>
        	{this.props.description}
        </p>
      </div>
    );
  }
}

TextView.displayName = 'ContentViewsTextView';

// Uncomment properties you need
// TextView.propTypes = {};
// TextView.defaultProps = {};

export default TextView;
