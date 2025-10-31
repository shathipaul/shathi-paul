"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const createProject = async (formData: FormData) => {
  const blogInfo = Object.fromEntries(formData.entries());

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/upload`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogInfo),
    }
  );

  const result = await res.json();
  console.log(result);

  if (result?.id) {
    revalidateTag("PROJECTS");
    revalidatePath("dashboard/projects");
  }
  return result;
};
