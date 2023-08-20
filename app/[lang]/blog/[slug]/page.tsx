import qs from "qs";
import { CMSDataAttributes } from "../page.jsx";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { JSX, ClassAttributes, ImgHTMLAttributes } from "react";

type Props = {
  post: CMSDataAttributes;
};

type PostPageProps = {
  params: {
    [x: string]: any;
    postID: string;
    title: string;
    content: string;
    excerpt: string;
    slug: string;
  }
};

interface CMSResponse {
  data: CMSDataAttributes;
  success: boolean;
  error: string;
  params: {
    [x: string]: any;
    postID: string;
    title: string;
    content: string;
    excerpt: string;
    slug: string;
  }

}

const baseURL = process.env.cmsApiBaseUrl;
const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.cmsApiKey}`,
      };

      function ImageRenderer(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>) {
        return (
            <img
                {...props}
                className="blog-content-image" // You can add any className or style here
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        );
    }

async function getSinglePost(slug: string, postID: string) {
  const params= qs.stringify({
    populate: "*",
    "filters[slug][$eq]": slug,
  });

const response = await fetch(`${baseURL}posts?${params}`, { headers });
const post=await response.json();
return  post.data[0].attributes;
}


export default async function PostPage({ params}: PostPageProps) {
const post= await getSinglePost(params.slug, params.postID);
console.log("post",post);
  return (
    <div className="container px-4 lg:px-0">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose prose-lg mx-auto">
        <ReactMarkdown
                      transformImageUri={(url: string) =>
                        url.startsWith("http") ? url : `${process.env.cmsBaseUrl}${url}`}
                        components={{
                          img: ImageRenderer
                      }}
                    
                      >
                      {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
