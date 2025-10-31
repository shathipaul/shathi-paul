import { model, Schema } from "mongoose";
import { IBlogs } from "./blogs.interface";

export const blogsSchema = new Schema<IBlogs>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    shortDes: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: false,
    },
  }
);

export const Blogs = model<IBlogs>("Blogs", blogsSchema);
