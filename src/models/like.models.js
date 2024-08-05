import mongoose, { Schema } from "mongoose";

/*
Like Schema Definition:
- video: Reference to the liked video, if applicable
- comment: Reference to the liked comment, if applicable
- tweet: Reference to the liked tweet, if applicable
- likedBy: Reference to the user who liked the item
- createdAt: Timestamp when the like was created
- updatedAt: Timestamp when the like was last updated
*/

const likeSchema = new Schema(
    {
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video", // Reference to the Video model, if the like is for a video
        },

        comment: {
            type: Schema.Types.ObjectId,
            ref: "Comment", // Reference to the Comment model, if the like is for a comment
        },

        tweet: {
            type: Schema.Types.ObjectId,
            ref: "Tweet", // Reference to the Tweet model, if the like is for a tweet
        },

        likedBy: {
            type: Schema.Types.ObjectId,
            ref: "User", // Reference to the User model who liked the item
        },
    },
    { timestamps: true } // Automatically manages createdAt & updatedAt fields
)

// Export the Like model
export const Like = mongoose.model("Like", likeSchema); // Always capitalize Like when exporting
