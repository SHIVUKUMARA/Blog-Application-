const multer = require('multer');
const { GridFsStorage } = require ('multer-gridfs-storage');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 

const storage = new GridFsStorage({
  url: `mongodb+srv://${username}:${password}@cluster0.pedjj5f.mongodb.net/blogapp?retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({storage}); 
