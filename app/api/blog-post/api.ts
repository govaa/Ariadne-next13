import axios from "axios";

const api = axios.create({
  baseURL: process.env.cmsApiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.cmsApiKey}`,
  },
});

export const urlPath = "posts";

const get = ({ page = 1, pageSize = 9, sort = "id:desc" }) => {
  const params = {
    populate: ["image", "author"],
    "pagination[pageSize]": pageSize,
    "pagination[page]": page,
    sort,
  };

  return api.get(urlPath, { params });
};

const getOneBySlug = (slug: any) => {
  const params = {
    populate: ["image", "author"],
    "filters[slug][$eq]": slug,
  };

  return api.get(urlPath, { params });
};

export default { get, getOneBySlug };
