import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
    {
        channel: {
            type: Schema.Types.ObjectId, //one to whom `subscriber is subscribing.
            ref: "User",
        },

        subscriber: {
            type: Schema.Types.ObjectId,   //one who is subscribing.
            ref: "User"
        },
    },
    { timestamps: true }   //for createdAt & updatedAt
)

export const Subscription = mongoose.model("Subscription", subscriptionSchema)     //always write Playlist in capital format whenever exporting. 