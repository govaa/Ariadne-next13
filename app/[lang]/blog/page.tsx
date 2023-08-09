import BlogCard from "@/components/blog/BlogCard";
import PageBanner from "@/components/pagebanner";
import Footer from "@/components/footer";

import { NextSeo } from "next-seo";
import Head from "next/head";
import { useState } from "react";
import { BlogPostApi } from "src/packages/blog-post";

const Blog = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <>
      <Head>
        <title>Blog | People Counting Software | Ariadne</title>
        <meta name="description" content="Ariadne" />
      </Head>
      <NextSeo canonical="https://www.ariadne.inc/blog" />

      <Navbar />

      <PageBanner pageTitle="Ariadne Blog" />
      <div
        className="blog-area ptb-80 quarter-circle overflow-hidden"
        style={{ position: "relative" }}
      >
        <div className="container semi-circle">
          <div className="row">
            {posts.data.map(({ attributes: post }) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const { data: initialPosts } = await BlogPostApi.get({});
  return { props: { initialPosts } };
}

export default Blog;
