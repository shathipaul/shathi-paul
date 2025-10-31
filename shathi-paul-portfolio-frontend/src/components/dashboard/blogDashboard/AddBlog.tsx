"use client";

import { createBlog } from "@/actions/createBlog";
import Form from "next/form";
import { useState } from "react";

type Props = {
  onClose: () => void;
};

const AddBlog = ({ onClose }: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white/80 p-6 rounded-lg mt-8 max-w-3xl w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold mb-4">Add New Blog</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="text-red-700 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <Form action={createBlog} onSubmit={() => setLoading(true)}>
          <div className="my-2">
            <input
              className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-white/80 hover:bg-white/94"
              id="image"
              name="image"
              type="url"
              placeholder="Image URL (https://...)"
            />
          </div>
          <div className="my-2">
            <input
              className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-white/80 hover:bg-white/94"
              id="title"
              name="title"
              type="text"
              placeholder="Project Title"
              required
            />
          </div>

          <div className="my-2">
            <textarea
              className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-white/80 hover:bg-white/94"
              id="shortDescription"
              name="shortDescription"
              rows={6}
              placeholder="Short description"
              required
            />
          </div>
          <div className="my-2">
            <textarea
              className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-white/80 hover:bg-white/94"
              id="description"
              name="description"
              rows={6}
              placeholder="Full description"
              required
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button
              className="py-3 px-6 rounded-2xl bg-primary text-secondary font-semibold"
              type="submit"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Blog"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddBlog;
