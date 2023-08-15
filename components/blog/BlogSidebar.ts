import Link from "next/link";

// Define the type for a single post
interface PostAttributes {
  title: string;
  slug: string;
  publishedAt: Date;
  image: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    };
  };
}

interface BlogSidebarProps {
  posts: { attributes: PostAttributes }[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ posts }) => {
  return (
    <div className="p-4 bg-gray-100" id="secondary">
      <div className="widget_ariadne_posts_thumb">
        <h3 className="widget-title text-xl font-bold mb-4">Recent Posts</h3>

        {posts.map(({ attributes: post }) => {
          const imageUrl = `${process.env.cmsBaseUrl}${post.image.data.attributes.formats.thumbnail.url}`;
          return (
            <article key={post.title} className="mb-4 flex">
              <Link href={`/blog/${post.slug}`}>
                <a className="w-1/4 mr-4">
                  <img src={imageUrl} className="rounded w-full h-auto" />
                </a>
              </Link>

              <div className="info w-3/4">
                <time className="text-sm text-gray-600 block mb-1">
                  {new Date(post.publishedAt).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h4 className="title text-md font-semibold">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="text-blue-600 hover:underline">{post.title}</a>
                  </Link>
                </h4>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSidebar;
