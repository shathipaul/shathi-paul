export const getAllData = async (
  endpoint: string,
  options?: { cache?: RequestCache; revalidate?: number; tags?: string[] }
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${endpoint}`, {
    cache: options?.cache || "no-store",
    next: {
      revalidate: options?.revalidate,
      tags: options?.tags,
    },
  });

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);

  return res.json();
};

export const getDataById = async (endpoint: string, id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/${endpoint}/${id}`
  );
  return await res.json();
};

// with cache
// const blogs = await getAllData("post", { cache: "no-store" }); //SSR

// with no cache
// const blogs = await getAllData("post", { cache: "no-cache" }); //SSR

//  with revalidate
// const blogs = await getAllData("products", { revalidate: 30 }); //ISR

// with tag
// const blogs = await getAllData("post", { tags: ["blogs"] }); //SSG

// default
// const blogs = await getAllData("blogs"); //SSG
