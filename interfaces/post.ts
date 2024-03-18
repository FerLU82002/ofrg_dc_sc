interface Post {
    sys: {
      id: string;
      createdAt: string;
    };
    fields: {
      title: string;
      slug: string;
      body: Object;
      description: string;
      image: {
        fields: {
          title: string;
          file: {
            url: string;
            fileName: string;
          };
        };
      };
    pdf: Object;
    };
  }

  export default Post;