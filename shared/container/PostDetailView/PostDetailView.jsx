import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Helmet from 'react-helmet';
const moment = require('moment');

class PostDetailView extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleClick() {
    this.setState({
      showAddPost: true,
    });
  }

  handleLogoClick() {
    this.props.dispatch(Actions.fetchPosts());
  }

  render() {
    return (
      <div>
        <Helmet title={this.props.post.store} />

        <Header onClick={function noop() {}} handleLogoClick={this.handleLogoClick} />
        <div className="container">
          <div className="single-post post-detail">
            <p className="post-title">{this.props.post.name}</p>
            <h3 className="post-desc"><b>Store: </b>{this.props.post.store}</h3>
            <p className="post-desc"><b>Date Checked: </b>{moment(this.props.post.dateChecked).format('MM/DD/YYYY')}</p>
            <p className="post-desc"><b>Price: </b>${this.props.post.price}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

PostDetailView.need = [(params) => {
  return Actions.getPostRequest.bind(null, params.slug)();
}];

PostDetailView.contextTypes = {
  router: React.PropTypes.object,
};

PostDetailView.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    store: PropTypes.string.isRequired,
    dateChecked: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    post: (store.post),
  };
}

export default connect(mapStateToProps)(PostDetailView);
