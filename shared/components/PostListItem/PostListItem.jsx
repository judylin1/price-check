import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
const moment = require('moment');

function PostListItem(props) {
  return (
    <div className="single-post">
      <h3 className="post-title ">
        <Link to={`/post/${props.post.slug}-${props.post.cuid}`} onClick={props.onClick}>
          {props.post.name}
        </Link>
      </h3>
      <p className="post-desc"><b>Store:</b> {props.post.store}</p>
      <p className="post-desc"><b>Price:</b> {props.post.price}</p>
      <p className="post-desc"><b>Date Checked:</b> {moment(props.post.dateChecked).format('MM/DD/YYYY')}</p>
      <Button bsStyle="danger" bsSize="xsmall"><a href="#" onClick={props.onDelete} style={{ color: 'white' }}>Delete</a></Button>
      <hr className="divider" />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    store: PropTypes.string.isRequired,
    dateChecked: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,

  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
