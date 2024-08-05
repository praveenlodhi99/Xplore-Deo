/*
Videofile string
owner ObjectId users - we dont need to do mongodb itself give a id.
thumbnail string
title string
description string
duration number
views number
isPublished boolean
createdAt Date
updatedAt Date
 */

import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,    //cloudinary URL
            required: true,
        },

        thumbnail: {
            type: String,    //cloudinary URL
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
            type: Number,  
            default: true,
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }, 
    },
    { timestamps: true}   //for createdAt & updatedAt
)

export const Video = mongoose.model("Video", videoSchema)     //always write Video in capital format whenever exporting. 