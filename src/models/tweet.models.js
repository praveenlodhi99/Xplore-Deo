import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema(
    {
        content: {
            type: String, 
            required: true,
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    { timestamps: true }   //for createdAt & updatedAt
)

export const Tweet = mongoose.model("Tweet", tweetSchema)     //always write Playlist in capital format whenever exporting. 