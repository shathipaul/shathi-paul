import { z } from "zod";

const projectsZodSchema = z.object({
  body: z.object({
    image: z.string({
      required_error: "Image needed",
    }),
    title: z.string({
      required_error: "Title needed",
    }),
    stack: z.string({
      required_error: "Stack needed",
    }),
    features: z.string({
      required_error: "Features needed",
    }),
    description: z.string({
      required_error: "Description needed",
    }),
    liveLink: z.string({
      required_error: "Live Link needed",
    }),
    projectLink: z.string({
      required_error: "Project Link needed",
    }),
  }),
});

export const ProjectsValidation = {
  projectsZodSchema,
};
