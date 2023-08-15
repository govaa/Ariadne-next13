import React from "react";
import { Icon, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from "@/app/api/blog-post/interface";


const SingleBlogPost = ({ post }: { post: BlogPost }) => {
  const { title, author, image, publishedAt, slug, excerpt, content } = post?.attributes ?? {};
  console.log(post)
  // Use optional chaining to avoid errors when image data isn't present
  const imageUrl = image && image.data && image.data.attributes && image.data.attributes.formats && image.data.attributes.formats.small && image.data.attributes.formats.small.url 
    ? `${process.env.cmsBaseUrl}${image?.data?.attributes?.formats?.small?.url}`
    : '';

  return (
    <div className="col-md-4">
      <div className="single-blog-post h-100">
        <div className="blog-image">
              <img src={imageUrl} alt={title} />
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
              {title}
          </h3>

          <span>
            By {author?.data?.attributes?.firstname}{" "}
            {author?.data?.attributes?.lastname}
          </span>

          <p>{(excerpt || "").slice(0, 250) + "..."}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
