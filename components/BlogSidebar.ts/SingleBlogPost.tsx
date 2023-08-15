import { BlogPostApi
export async function SinglePage(req: { query: { slug: string}; }) {
  const { data: post } = await BlogPostApi.getOneBySlug(req.query.slug);

  if (!post.data.length) {
    return { notFound: true };
  }

  return { props: { post: post.data[0].attributes } };
}

export default SinglePage;
