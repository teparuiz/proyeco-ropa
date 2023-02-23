const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    id: {
      type: Number,
      require: true,
      trim: true,
      unique: true,
    },
    title: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    price: {
      type: Number,
      require: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    image: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", productSchema);
