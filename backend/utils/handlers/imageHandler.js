const fs = require("fs");
const path = require("path");

// Process and Save Images
const ProcessImage = async (req, model) => {
  const allowedFileType = [".png", ".jpg", ".jpeg"];
  let image = [null, null];

  if (req.files) {
    const file = req.files.file;
    const fileExt = path.extname(file.name).toLowerCase();

    if (!allowedFileType.includes(fileExt)) {
      return { status: 415, error: "Unsupported Media Type" };
    }

    const fileSizeMB = file.data.length / 1000000;
    if (fileSizeMB > 5) {
      throw {
        status: 413,
        error: "Media Too Large: Media must be less than 5 MB",
      };
    }

    const fileName = `${file.md5}${fileExt}`;
    const filePath = path.join(__dirname, "../public/images", fileName);

    await file.mv(filePath);

    const imageURL = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    image = [fileName, imageURL];
  } else if (req.body.image || req.body.imageURL) {
    image = [req.body.image, req.body.imageURL];
  } else if (model) {
    image = [model.image, model.imageURL];
  }

  return image;
};

// Delete Image
const DeleteImage = async (imageName) => {
  const filePath = path.join(__dirname, "../public/images", imageName);
  try {
    fs.unlink(filePath);
  } catch (error) {
    console.error(`Failed to delete image: ${error.message}`);
  }
};

// Image Handler
const imageHandler = async (req, option, value = null) => {
   if (option === "delete") {
     return await DeleteImage(value);
   } else if (option === "process") {
     const image = await ProcessImage(req, article);
     if (image && image.error) {
       throw { status: image.status, error: image.error };
     }
     return image;
   } else {
     throw { status: 505, error: "Image Processing Function is not specified" };
   }
 };

module.exports = imageHandler;
