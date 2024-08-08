import mongoose from "mongoose";

// Define the Movie schema
const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    genres: [
      {
        type: String,
        enum: [
          "Action",
          "Comedy",
          "Drama",
          "Horror",
          "Sci-Fi",
          "Romance",
          "Thriller",
          "Documentary",
        ],
      },
    ],
    director: {
      type: String,
      required: true,
      trim: true,
    },
    language: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
    },
  },
  { timestamps: true }
);

// Create the Movie model
const Movie = mongoose.model("Movie", movieSchema);
export default  Movie;