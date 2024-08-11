const fs = require("fs");
const path = require("path");

const ProcessImage = async (req, model) => {
  let image = [null, null];
  const allowedFileType = [".png", ".jpg", ".jpeg"];

  if (req.files !== null) {
    const file = req.files.file;
    const fileExt = path.extname(file.name);

    if (!allowedFileType.includes(fileExt.toLowerCase()))
      return { status: 415, error: "Unsupported Media Type" };

    const fileSizeMB = file.data.length / 1000000;

    if (fileSizeMB > 5)
      return {
        status: 413,
        error: "Media Too Large: Media must be less than 5 MB",
      };

    const fileName = file.md5 + fileExt;

    file.mv(`./public/images/${fileName}`, async (error) => {
      if (error) return { status: 500, error: error.message };
    });

    const imageName = fileName;
    const imageURL = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    image = [imageName, imageURL];
  }

  if (model) {
    image = [model.image, model.imageURL];
  }

  return image;
};

const DeleteImage = async (imageName) => {
  const filePath = `./public/images/${imageName}`;
  fs.unlinkSync(filePath);
};

module.exports = { ProcessImage, DeleteImage };
