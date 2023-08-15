export interface Bloginterface {
    [x: string]: any;
    data:{
        [x: string]: any;
        title: string;
        image: {
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
        publishedAt: string;
        author: {
        data: {
            attributes: {
            firstname: string;
            lastname: string;
            };
        };
        };
        excerpt: string;
    meta: {
        pagination: {
          pageCount: number;
          page: number;
          // ... other meta properties
        }
      };
  }
}