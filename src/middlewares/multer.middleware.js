import multer from "multer";

// Configure the storage settings for Multer, specifying where and how files should be saved on the server
const storage = multer.diskStorage({

    // Define the destination where uploaded files will be stored
    destination: function (req, file, cb) {

        // We are storing the uploaded files in the './public/temp' directory
        // This path should be relative to the root of your project
        // The 'cb' callback function is used to pass the destination path back to Multer
        cb(null, './public/temp')
    },

    // Define the filename format for the uploaded files
    filename: function (req, file, cb) {

        // Here, we are setting the filename to be the original name of the uploaded file
        // You could also add a unique suffix or a timestamp to avoid name collisions
        // For example:
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // cb(null, file.fieldname + '-' + uniqueSuffix);
        cb(null, file.originalname)
    }
})

// Create an instance of Multer with the defined storage settings

// This 'upload' instance can be used in your routes to handle file uploads
export const upload = multer({
    storage // This specifies that the storage configuration defined above should be used
})
