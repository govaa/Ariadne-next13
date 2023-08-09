import PageBanner from "@/components/pagebanner";
import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlogPostApi } from "@/app/api/blog-post";
import { Icon, Clock, User } from "lucide-react";

interface Post {
  title: string;
  image: {
    data: {
      attributes: {
        formats: {
          small: {
            url: string;
          };
        };
      };
    };
  };
  publishedAt: string;
  author: {
    data: {
      attributes: {
        firstname: string;
        lastname: string;
      };
    };
  };
  content: string;
}

interface Recent {
  // ...declare recent properties here...
}

const AnchorTenants: React.FC<{ post: Post; recent: Recent }> = ({
  post,
  recent,
}) => {
  const imageUrl = `${process.env.cmsBaseUrl}${post.image.data.attributes.formats.small.url}`;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Ariadne" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MainNav />

      <PageBanner pageTitle={post.title} />

      <div
        className="blog-details-area ptb-80 overflow-hidden quarter-circle"
        style={{ position: "relative" }}
      >
        <div className="container semi-circle">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img
                    src={imageUrl}
                    alt="image"
                    className="w-100"
                    style={{
                      objectFit: "cover",
                      height: "400px",
                    }}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Clock color="black" size={24} />{" "}
                        {new Date(post.publishedAt).toLocaleDateString("en-us", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </li>
                      <li>
                        <User color="black" size={24} />{" "}
                        {post.author.data.attributes.firstname}{" "}
                        {post.author.data.attributes.lastname}
                      </li>
                    </ul>
                  </div>
                  <ReactMarkdown
                    transformImageUri={(url) =>
                      url.startsWith("http")
                        ? url
                        : `${process.env.cmsBaseUrl}${url}`
                    }
                    className="prose"
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getServerSideProps(
  req: { query: { slug: any } }
): Promise<{ props: { post: Post; recent: Recent }; } | { notFound: true; }> {
  const { data: post } = await BlogPostApi.getOneBySlug(req.query.slug);
  const {
    data: { data: recent },
  } = await BlogPostApi.get({ page: 1, pageSize: 2 });

  if (!post.data.length) {
    return { notFound: true };
  }

  return {
    props: { post: post.data[0].attributes, recent },
  };
}

export default AnchorTenants;
