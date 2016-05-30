import React, { Component, PropTypes } from 'react';

class PostCreateView extends Component {
  constructor(props, context) {
    super(props, context);
    this.addPost = this.addPost.bind(this);
  }

  addPost() {
    const nameRef = this.refs.name;
    const storeRef = this.refs.store;
    const priceRef = this.refs.price;
    const dateCheckedRef = this.refs.dateChecked;
    if (nameRef.value && storeRef.value && dateCheckedRef.value && priceRef.value) {
      this.props.addPost(nameRef.value, storeRef.value, dateCheckedRef.value, priceRef.value);
      nameRef.value = storeRef.value = dateCheckedRef.value = priceRef.value = '';
    }
  }

  render() {
    const cls = `form ${(this.props.showAddPost ? 'appear' : '')}`;
    return (
      <div className={cls}>
        <div className="form-content">
          <h2 className="form-title" style={{ textAlign: 'center' }}>Add New Product</h2>
          <input placeholder="Name" className="form-field" ref="name" />
          <input placeholder="Price" className="form-field" ref="price" />
          <input placeholder="Store" className="form-field" ref="store" />
          <input placeholder="Date Checked" className="form-field" ref="dateChecked"></input>
          <a className="post-submit-button align-right" href="#" onClick={this.addPost}>Submit</a>
        </div>
      </div>
    );
  }
}

PostCreateView.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
};

export default PostCreateView;
