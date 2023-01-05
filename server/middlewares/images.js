const multer = require("multer");

let allowedTypes = [
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/png",
  "video/mp4",
  "video/mvk",
];

const upload = multer({
  strorage: multer.diskStorage({
    destination: "../UploadedFiles",
    filename: (req, file, cb) => {
      let name = Date.now().toString() + "newName_" + file.originalname;
      cb(null, name);
    },
  }),
  limits: {
    fileSizes: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (!allowedTypes.includes(file.mimetype)) {
      cb(
        new Error(),
        json({
          status: false,
          message: " Inavlid File to type Upload",
          Error,
        }),
        false
      );
      
    }
    cb(null,true)
  },
});
module.exports = {
  upload,
};
