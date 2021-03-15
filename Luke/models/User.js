const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bands: [{ type: String, required: true }],
    instrument: { type: String, required: true },
    albums: [
      {
        title: { type: String, required: true },
        year: { type: Number, required: true },
        //possibly type: Date.year?
      },
    ],
    birthday: { type: Date, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model("User", UserSchema);

module.exports = User;
