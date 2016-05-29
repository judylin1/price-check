import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

function PostListItem(props) {
  return (
    <div className="single-post">
      <h3 className="post-title ">
        <Link to={`/post/${props.post.slug}-${props.post.cuid}`} onClick={props.onClick}>
          {props.post.title}
        </Link>
      </h3>
      <p className="author-name">By {props.post.name}</p>
      <p className="post-desc">{props.post.content}</p>
      <Button bsStyle="danger" bsSize="xsmall"><a href="#" onClick={props.onDelete} style={{ color: 'white' }}>Delete</a></Button>
      <hr className="divider" />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,

  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
