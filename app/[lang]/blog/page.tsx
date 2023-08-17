import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import { ReactNode } from "react";

export type ImageAttributes = {
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

export type CMSDataAttributesBase = {
  [x: string]: ReactNode;
}

export type CMSDataAttributesSpecific = {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  image: ImageAttributes;
  // ... other fields if necessary
};

export type CMSDataAttributes = CMSDataAttributesBase & CMSDataAttributesSpecific;

export type CMSResponse = {
    data: {
        attributes: CMSDataAttributes;
    }[];
};

const get = async ({ page = 1, pageSize = 20, sort = "id:desc" }) => {
  let params = {
    populate: ["image", "author"].join(","),
    "pagination[pageSize]": String(pageSize),  // Convert to string
    "pagination[page]": String(page),          // Convert to string
    sort,
  };

  // Convert the params object to a query string
  const queryString = new URLSearchParams(params).toString();

  const baseURL = process.env.cmsApiBaseUrl;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.cmsApiKey}`,
  };

  const response = await fetch(`${baseURL}posts?${queryString}`, { headers });
  if (response.status === 200) {
    const data: CMSResponse = await response.json();  // Provide an explicit type
    return data.data.map(({ attributes }) => attributes);
  } else {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
};

export default async function BlogIndex() {
    const posts: CMSDataAttributes[] = await get({}); // You can pass other parameters as required
    return (
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            {posts.map(post => (
                <div key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Link href={`/blog/${post.slug}`} className="text-grey-600 hover:text-grey-800 transition-colors duration-200">
                    <img src={`${process.env.cmsBaseUrl}${post.image.data?.attributes?.formats?.small?.url}`} alt={post.title} className="w-full h-60 object-cover rounded-lg" />
                    <div className="p-5">
                        <h2 className="text-2xl font-semibold mb-3 truncate">{post.title}</h2>
                        <p className="text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
                        <span className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Read More</span>
                    </div>
                  </Link>
                </div>
            ))}
        </div>
    </div>
    );

}
