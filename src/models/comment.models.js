import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

/*
Comment Schema Definition:
- content: Text content of the comment
- video: Reference to the Video model if the comment is related to a video
- owner: Reference to the User model who made the comment
- createdAt: Timestamp when the comment was created
- updatedAt: Timestamp when the comment was last updated
*/

const commentSchema = new Schema(
    {
        // The 'content' field holds the text of the comment and is required
        content: {
            type: String,
            required: true,
        },

        // Reference to the Video model if the comment is related to a video
        // This will be null if the comment is not related to a video
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video",
        },

        // Reference to the User model indicating who made the comment
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true } // Automatically manages createdAt & updatedAt fields
)

// Injecting the aggregation pagination plugin into the commentSchema
commentSchema.plugin(mongooseAggregatePaginate);

// Export the Comment model
export const Comment = mongoose.model("Comment", commentSchema); // Always capitalize Comment when exporting
