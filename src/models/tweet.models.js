import mongoose, { Schema } from "mongoose";

/*
Tweet Schema Definition:
- content: The text content of the tweet
- owner: Reference to the User model, representing the user who created the tweet
- createdAt: Timestamp when the tweet was created
- updatedAt: Timestamp when the tweet was last updated
*/

const tweetSchema = new Schema(
    {
        content: {
            type: String,
            required: true, // Content of the tweet is required
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User", // Reference to the User model
        },
    },
    { timestamps: true } // Automatically manages createdAt & updatedAt fields
)

// Export the Tweet model
export const Tweet = mongoose.model("Tweet", tweetSchema); // Always capitalize Tweet when exporting
