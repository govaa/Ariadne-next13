import React from "react";
import { Icon, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
  title: string;
  author: Author;
  image: Image;
  publishedAt: string;
  slug: string;
  excerpt: string;
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  const { title, author, image, publishedAt, slug, excerpt } = post.attributes;
  console.log(post)
  // Use optional chaining to avoid errors when image data isn't present
  const imageUrl = image && image.data && image.data.attributes && image.data.attributes.formats && image.data.attributes.formats.small && image.data.attributes.formats.small.url 
    ? `${process.env.cmsBaseUrl}${image.data.attributes.formats.small.url}`
    : '';

  return (
    <div className="col-md-4">
      <div className="single-blog-post h-100">
        <div className="blog-image">
          <Link href={"/blog/" + slug}>
              <img src={imageUrl} alt={title} />
          </Link>

          <div className="date">
          <Calendar color="black" size={24} />
            {new Date(publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>

        <div className="blog-post-content">
          <h3>
            <Link href={"/blog/" + slug}>
              {title}
            </Link>
          </h3>

          <span>
            By {author?.data?.attributes?.firstname}{" "}
            {author?.data?.attributes?.lastname}
          </span>

          <p>{(excerpt || "").slice(0, 250) + "..."}</p>

          <Link href={"/blog/" + slug} className="read-more-btn">
              Read More <ChevronRight />

          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
