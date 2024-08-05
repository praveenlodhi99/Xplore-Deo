import mongoose, { Schema } from "mongoose";

/*
Subscription Schema Definition:
- channel: Reference to the user (channel) being subscribed to
- subscriber: Reference to the user subscribing to the channel
- createdAt: Timestamp when the subscription was created
- updatedAt: Timestamp when the subscription was last updated
*/

const subscriptionSchema = new Schema(
    {
        channel: {
            type: Schema.Types.ObjectId, // User being subscribed to
            ref: "User",
            // required: true,
        },

        subscriber: {
            type: Schema.Types.ObjectId, // User subscribing
            ref: "User",
            // required: true,
        },
    },
    { timestamps: true } // Automatically manages createdAt & updatedAt fields
)

// Export the Subscription model
export const Subscription = mongoose.model("Subscription", subscriptionSchema); // Always capitalize Subscription when exporting
