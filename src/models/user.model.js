/*
id string pk - we dont need to do mongodb itself give a id.
username string
email string
fullName string
avatar string
coverImage string
watchHistory ObjectId[] videos
password string
refreshToken string
createdAt Date
updatedAt Date
 */

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true     //not required for everyfield
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true     //not required for everyfield
        },

        avatar: {
            type: String,    //cloudinary URL
            required: true,
        },

        coverImage: {
            type: String,    //cloudinary URL
        },

        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],

        password: {
            type: String,
            required: [true, "password is required"],
            minlength: 8,
            select: false,  //not required when querying documents
        },

        refreshToken: {
            type: String,
        },
    },
    { timestamps: true}   //for createdAt & updatedAt
)

export const User = mongoose.model("User", userSchema)     //always write user in capital format whenever exporting.