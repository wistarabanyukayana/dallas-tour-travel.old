const fs = require("fs");
const path = require("path");

// Process and Save Images
const ProcessImage = async (req, model) => {
  const allowedFileType = [".png", ".jpg", ".jpeg"];
  let imageName = null;

  if (req.files) {
    const file = req.files.File;
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
    const filePath = path.join(__dirname, "../../public/images", fileName);

    // Check if the file already exists
    if (fs.existsSync(filePath)) {
      console.log(`File ${fileName} already exists, using the existing file.`);
    } else {
      // If the file doesn't exist, save it
      console.log(`Saving new file to: ${filePath}`);
      await file.mv(filePath);
    }

    imageName = fileName;
  } else if (req.body.ImageName) {
    imageName = req.body.ImageName;
  } else if (model) {
    imageName = model.ImageName;
  }

  return imageName;
};

// Delete Image
const DeleteImage = async (imageName) => {
  const filePath = path.join(__dirname, "../../public/images", imageName);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`Successfully deleted ${imageName}`);
      });
    } else {
      console.warn(`File ${imageName} does not exist`);
    }
  } catch (error) {
    console.error(`Failed to delete image: ${error.message}`);
  }
};

// Image Handler
const imageHandler = async (req, option, value = null) => {
  if (option === "delete") {
    return await DeleteImage(value);
  } else if (option === "process") {
    const image = await ProcessImage(req, value);
    if (image && image.error) {
      throw { status: image.status, error: image.error };
    }
    return image;
  } else {
    throw { status: 505, error: "Image Processing Function is not specified" };
  }
};

module.exports = imageHandler;
