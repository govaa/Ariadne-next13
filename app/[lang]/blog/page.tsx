"use client"
import BlogCard from "@/components/blog/BlogCard";
import PageBanner from "@/components/pagebanner";
import Footer from "@/components/footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BlogPostApi } from "@/app/api/blog-post/page";
import { useRouter } from 'next/navigation';
import router from "next/router";


type AuthorAttributes = {
  firstname: string;
  lastname: string;
};

type AuthorData = {
  attributes: AuthorAttributes;
};

type Author = {
  data: AuthorData;
};

type ImageFormats = {
  small: {
    url: string;
  };
};

type ImageAttributes = {
  formats: ImageFormats;
};

type ImageData = {
  attributes: ImageAttributes;
};

type Image = {
  data: ImageData;
};

type BlogPost = {
  [x: string]: any;
  title: string;
  author: Author;
  image: Image;
  publishedAt: string;
  slug: string;
  excerpt: string;
};


const Blog = () => {

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await BlogPostApi.get({ page });
      setPosts(data);
    };
    fetchPosts();
  }, [page]);

  const onClickChangePage = (page: string) => {
    router.push(`/blog${page}`);
  };

  return (
    <>
      <Head>
        <title>Blog | People Counting Software | Ariadne</title>
        <meta name="description" content="Ariadne" />
      </Head>

      <PageBanner pageTitle="Ariadne Blog" />
      <div
        className="blog-area py-80 bg-gray-200 quarter-circle overflow-hidden"
      >
        <div className="container semi-circle">
          <div className="row">
            {Array.isArray(posts) ? posts.filter((post) => post.locale === locale).map((post) => (
              <BlogCard key={post.title} post={post} />
            )) : <p>No posts available</p>}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
