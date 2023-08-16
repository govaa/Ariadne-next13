import qs from "qs";
import { CMSDataAttributes } from "../page.jsx";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

type Props = {
  post: CMSDataAttributes;
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

async function getSinglePost(slug: string, postID: string) {
  const params= qs.stringify({
    populate: "*",
    "filters[slug][$eq]": slug,
  });

const response = await fetch(`${baseURL}posts?${params}`, { headers });
const post=await response.json();
return  post.data[0].attributes;
}


export default async function PostPage({ params}: CMSResponse) {
const post= await getSinglePost(params.slug, params.postID);
console.log("post",post);
  return (
    <div className="container px-4 lg:px-0">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose prose-lg mx-auto">
        <ReactMarkdown
                      transformImageUri={(url: string) =>
                        url.startsWith("http") ? url : `${process.env.cmsBaseUrl}${url}`
                      }               
                      >
                      {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
