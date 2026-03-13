import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname) //same name no 2 things so date add
  }
})

export const upload = multer({ storage })