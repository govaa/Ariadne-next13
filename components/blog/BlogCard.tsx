import Link from "next/link";
import * as Icon from "lucide-react";
import { Bloginterface } from "@/app/api/blog-post/interface";

export default function BlogCard({ post }:Bloginterface) {
  const { title, author, image, publishedAt, slug, excerpt } = post.attributes;

  const getAuthorFullName = (author: { data: { attributes: { firstname: any; lastname: any; }; }; }) => {
    return `${author.data.attributes.firstname} ${author.data.attributes.lastname}`;
  };

  const getFormattedDate = (dateStr: string | number | Date) => {
    return new Date(dateStr).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const imageUrl = `${process.env.cmsBaseUrl}${image.data.attributes.formats.small.url}`;
  const blogLink = `/blog/${slug}`;

  return (
    <div className="col-md-4">
      <div className="single-blog-post h-100">
        
        <div className="blog-image">
          <Link href={blogLink}>
            <a><img src={imageUrl} height="280vh" alt={title} /></a>
          </Link>

          <div className="date">
            <Icon.Calendar />
            {getFormattedDate(publishedAt)}
          </div>
        </div>

        <div className="blog-post-content">
          <h3>
            <Link href={blogLink}>
              <a>{title}</a>
            </Link>
          </h3>

          <span>
            By {getAuthorFullName(author)}
          </span>

          <p>{`${excerpt.slice(0, 250)}...`}</p>

          <Link href={blogLink}>
            <a className="read-more-btn">
              Read More <Icon.ArrowRight />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
