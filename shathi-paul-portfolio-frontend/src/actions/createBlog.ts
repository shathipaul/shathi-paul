"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createBlog = async (formData: FormData) => {
  const blogInfo = Object.fromEntries(formData.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogInfo),
  });

  const result = await res.json();

  if (result?.id) {
    revalidateTag("BLOGS");
    // revalidatePath("/blogs");
    redirect("/dashboard/blogs");
  }
  return result;
};
