import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'ramda';

// import * as Actions from '../../redux/actions/commentsAction';

import SimpleSlider from '../ui/Slider';

if (process.env.WEBPACK) require('./home.pcss');

class Home extends Component {
  render() {
    return (
      <SimpleSlider />
    );
  }
}

// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

// Home.needs = () => Actions.fetchComments();

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
