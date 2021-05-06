
var mongoose = require('mongoose');
var Author = require('./author');

var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    title:String,
    summary:String,
    pages:Number,
    publication:String,
    cover_image:StyleMedia,
    category:[String],
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  },
  { timestamps: true }
);

var Book = mongoose.model('Book', commentSchema);

module.exports = Book;