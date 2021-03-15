const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    keywords: [{ type: String, required: true }],
    category: { type: String, required: true },
    comments: [
      { text: { type: String, required: true } },
      { user: { type: String, required: true } },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Article = model("Article", ArticleSchema);

//! experiments

//ArticleSchema.virtual("author").set(function () {
//  return this._id;
//});

//ArticleSchema.virtual("comments").set(function () {
//  return [{ text, user: this._id }];
//});

module.exports = Article;
