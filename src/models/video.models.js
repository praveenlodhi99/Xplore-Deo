import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

/*
Video Schema Definition:
- videoFile: URL to the video file stored on cloudinary
- thumbnail: URL to the video's thumbnail image stored on cloudinary
- title: Title of the video
- description: Description of the video
- duration: Duration of the video in seconds
- views: Number of times the video has been viewed
- isPublished: Boolean flag indicating if the video is published or not
- owner: Reference to the user who owns the video
- createdAt: Timestamp when the video was created
- updatedAt: Timestamp when the video was last updated
*/

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,    // URL to the video file on cloudinary
            required: true,
        },

        thumbnail: {
            type: String,    // URL to the video's thumbnail image on cloudinary
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,  
            required: true,
        },

        duration: {
            type: Number,    
            required: true,
        },

        views: {
            type: Number,   
            default: 0,
        },

        isPublished: {
            type: Boolean,  
            default: true,
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Reference to the User model
        }, 
    },
    { timestamps: true }   // Automatically manages createdAt & updatedAt fields
)

// Injecting the pagination plugin into the videoSchema
videoSchema.plugin(mongooseAggregatePaginate);

// Export the Video model
export const Video = mongoose.model("Video", videoSchema); // Always capitalize Video when exporting
