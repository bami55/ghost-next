// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { BLOG_URL, CONTENT_API_KEY } = process.env
  const url = `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image`
  const data = await fetch(url).then(res => res.json())
  res.status(200).json({ posts: data.posts })
}
