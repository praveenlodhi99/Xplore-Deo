import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configure Cloudinary with credentials from environment variables
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY, // Cloudinary API secret key
});

// /** EXTRA CONTENT GIVEN BY ChatGPT
//  * Uploads a local file to Cloudinary.
//  * 
//  * @param {string} localFilePath - The path to the file on the local server.
//  * @returns {object|null} - The response from Cloudinary, or null if an error occurs.
//  */

const uploadOnCloudinary = async(localFilePath) => {
    try {
        // If no file path is provided, don't proceed with the upload
        if (!localFilePath) return null;

        // Upload the file to Cloudinary, automatically detecting the file type
        const response = await cloudinary.uploader.upload(
            localFilePath, {
                resource_type: "auto" // Automatically detect file type (image, video, etc.)
            }
        );

        console.log('File uploaded on Cloudinary. File src: ' + response.url);

        // Once the file is uploaded, delete it from the local server
        fs.unlinkSync(localFilePath);
        return response;

    } catch (error) {
        // If an error occurs, delete the file from the local server as a cleanup step
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export { uploadOnCloudinary };
