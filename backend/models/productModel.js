import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true},
    rating: { type: Number, required: true},
    name: { type: String, required: true}
})

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    sunglasses: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Numeric,
      required: true,
      deafult: 0,
    },
    },
    countInStock: {
      type: Numeric,
      required: true,
    },
    reviews: [reviewSchema],

    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)