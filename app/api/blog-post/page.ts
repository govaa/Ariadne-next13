import getCmsData from "./getcmsdata";

const urlPath = "posts";

class BlogPost {
  static get({ page = 1, pageSize = 9, sort = "id:desc" }) {
    let params = {
      populate: ["image", "author"],
      "pagination[pageSize]": pageSize,
      "pagination[page]": page,
      sort,
    };

    return getCmsData(urlPath, { params });
  }

  static getOneBySlug(slug) {
    let params = {
      populate: ["image", "author"],
      "filters[slug][$eq]": slug,
    };

    return getCmsData(urlPath, { params });
  }
}

export default BlogPost;
