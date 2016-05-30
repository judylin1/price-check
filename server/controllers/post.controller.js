import Post from '../models/post';
import cuid from 'cuid';
import slug from 'slug';
import sanitizeHtml from 'sanitize-html';

export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ posts });
  });
}

export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.store || !req.body.post.dateChecked || !req.body.post.price) {
    return res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.store = sanitizeHtml(newPost.store);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.dateChecked = sanitizeHtml(newPost.dateChecked);
  newPost.price = sanitizeHtml(newPost.price);

  newPost.slug = slug(newPost.store.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ post: saved });
  });
}

export function getPost(req, res) {
  const newSlug = req.query.slug.split('-');
  const newCuid = newSlug[newSlug.length - 1];
  Post.findOne({ cuid: newCuid }).exec((err, post) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ post });
  });
}

export function deletePost(req, res) {
  const postId = req.body.postId;
  Post.findById(postId).exec((err, post) => {
    if (err) {
      return res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
