export interface IBlogData {
  blogId: number;
  image: string;
  title: string;
  date: string;
  time: string;
  shortDes: string;
  description: string;
}

export interface IFAQData {
  ques: string;
  ans: string;
}
export interface IProjects {
  projectId: number;
  img: string;
  title: string;
  stack: string;
  features: string;
  description: string;
  link: string;
  projectLink: string;
}
