// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { slug } = req.query;
  const { BLOG_URL, CONTENT_API_KEY } = process.env;
  const url = `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`;
  const data = await fetch(url).then((res) => res.json());
  res.status(200).json({ post: data.posts[0] });
}
