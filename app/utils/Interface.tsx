export interface Post {
  title: string;
  slug: {current: string};
  publishedAt: string;
  _id: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
}

export interface Tag {
  name: string;
  _id: string;
  slug: {current: string};
  postCounter?: number;
}