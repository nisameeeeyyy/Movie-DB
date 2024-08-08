import express from "express";
import Movie from "../models/movie.model.js";

const app = express();
// Route to get all movies
app.get("/get-all-movies", async (req, res) => {
  try {
    // Query the database for all movies
    const movies = await Movie.find();

    // Send the movies back in the response
    res.status(200).json({
      success: true,
      data: movies,
    });
  } catch (error) {
    // Handle any errors that occur during the query
    console.error("Error fetching movies:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve movies",
    });
  }
});

// POST Route: Add a New Movie
app.post("/add-movie", async (req, res) => {
  try {
    const { title, releaseDate, genres, director, language, rating } = req.body;
    if (
      !title ||
      !releaseDate ||
      !genres ||
      !director ||
      !language ||
      !rating
    ) {
      res.status(400).json({
        success: false,
        message: "All feilds are required!",
      });
    } else {
      const movie = new Movie({
        title,
        releaseDate,
        genres,
        director,
        language,
        rating,
      });
      await movie.save();
      res.status(201).json({
        success: true,
        data: movie,
      });
    }
  } catch (error) {
    console.error("Error adding movie:", error);
    res.status(400).json({
      success: false,
      message: "Failed to add movie",
    });
  }
});

// PATCH Route: Update an Existing Movie
app.patch("/edit-movie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, releaseDate, genres, director, language, rating } = req.body;

    // Check for required fields
    if (
      !title ||
      !releaseDate ||
      !genres ||
      !director ||
      !language ||
      !rating
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    // Attempt to update the movie
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { title, releaseDate, genres, director, language, rating },
      {
        new: true, // Return the updated document
        runValidators: true, // Validate data against schema
      }
    );

    // Check if the movie was found and updated
    if (!updatedMovie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    // Successfully updated
    res.status(200).json({
      success: true,
      data: updatedMovie,
    });
  } catch (error) {
    console.error("Error updating movie:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update movie",
    });
  }
});

// DELETE Route: Delete a Movie
app.delete("/delete-movie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(400).json({
      success: false,
      message: "Failed to delete movie",
    });
  }
});

export default app;
