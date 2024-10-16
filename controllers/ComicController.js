const Comic = require("../models/ComicSchema");

const CreateComic = async (req, res, next) => {
  const {
    bookName,
    authorName,
    yearOfPublication,
    price,
    discount,
    numberOfPages,
    condition,
    description,
  } = req.body;

  if (
    !bookName ||
    !yearOfPublication ||
    !price ||
    !numberOfPages ||
    !condition
  ) {
    const error = new Error(
      "All fields are required: bookName, yearOfPublication, price, numberOfPages, condition."
    );
    error.statusCode = 400;
    return next(error); // Pass the error to the error handler
  }

  const comic = new Comic({
    bookName,
    authorName,
    yearOfPublication,
    price,
    discount,
    numberOfPages,
    condition,
    description,
  });

  try {
    const savedComic = await comic.save();
    res.status(201).json(savedComic);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};

const GetAllComics = async (req, res, next) => {
  try {
    const {
      author,
      year,
      price,
      condition,
      sortBy,
      order = "asc",
      page = 1,
      limit = 10,
      name,
    } = req.query;

    const filter = {};
    if (author) filter.authorName = author;
    if (year) filter.yearOfPublication = year;
    if (price) filter.price = price;
    if (condition) filter.condition = condition;
    if (name) filter.bookName = name;

    const sort = {};
    if (sortBy) {
      sort[sortBy] = order === "desc" ? -1 : 1;
    }
    const skip = (page - 1) * limit;

    const data = await Comic.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));
    res.status(200).json(data);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};

const GetComic = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    const error = new Error("Comic book ID is required.");
    error.statusCode = 400;
    return next(error);
  }

  try {
    const comic = await Comic.findById(id);
    if (!comic) {
      const error = new Error("Comic book not found.");
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json(comic);
  } catch (error) {
    next(error);
  }
};

const UpdateComic = async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;

  if (!id) {
    const error = new Error("Comic book ID is required.");
    error.statusCode = 400;
    return next(error);
  }

  try {
    const updatedComic = await Comic.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!updatedComic) {
      const error = new Error("Comic book not found.");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json(updatedComic);
  } catch (error) {
    next(error);
  }
};

const DeleteComic = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    const error = new Error("Comic book ID is required.");
    error.statusCode = 400;
    return next(error);
  }

  try {
    const deleteComic = await Comic.findByIdAndDelete(id);
    if (!deleteComic) {
      const error = new Error("Comic book not found.");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      comic: deleteComic,
      message: "Comic Book Deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  GetAllComics,
  CreateComic,
  GetComic,
  UpdateComic,
  DeleteComic,
};
