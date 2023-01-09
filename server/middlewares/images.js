const multer = require("multer");

let allowedTypes = [
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/png",

];

const upload = multer({
  storage: multer.diskStorage({
    destination: "../public/uploads",
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
