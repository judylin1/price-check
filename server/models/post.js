import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: { type: 'String', required: true },
  store: { type: 'String', required: true },
  dateChecked: { type: 'Date', required: true },
  price: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Post', postSchema);
