import axios from "axios";

const NCNewsAPI = axios.create({
  baseURL: "https://yangalexyangg-news-app.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  return NCNewsAPI.get(`/articles`, { params: { topic: topic } })
    .then((res) => {
      return res.data.articles;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchSortedArticles = (query) => {
  const split = query.split("&")[0];
  const sorted = split.split("=")[1];
  const asc = query.split("=")[2];
  return NCNewsAPI.get(`/articles`, {
    params: {
      sort_by: sorted,
      order: asc,
    },
  })
    .then((res) => {
      return res.data.articles;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchTopics = () => {
  return NCNewsAPI.get(`/topics`)
    .then((res) => {
      return res.data.topics;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchSingleArticle = (article_id) => {
  return NCNewsAPI.get(`/articles/${article_id}`)
    .then((res) => {
      return res.data.article;
    })
    .catch((error) => {
      return error;
    });
};

export const patchArticle = (article_id, inc_amount) => {
  return NCNewsAPI.patch(`/articles/${article_id}`, {
    inc_votes: inc_amount,
  })
    .then((res) => {
      return res.data.article;
    })
    .catch((error) => {
      return error;
    });
};

export const fetchComments = (article_id) => {
  return NCNewsAPI.get(`/articles/${article_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch((error) => {
      return error;
    });
};

export const postComment = (article_id, comment) => {
  console.log(comment);
  return NCNewsAPI.post(`/articles/${article_id}/comments`, comment)
    .then((res) => {
      return res.data.comment;
    })
    .catch((error) => {
      return error;
    });
};

export const deleteComment = (comment_id) => {
  return NCNewsAPI.delete(`/comments/${comment_id}`).catch((error) => {
    return error;
  });
};

export const fetchUsers = () => {
  return NCNewsAPI.get(`/users`)
    .then((res) => {
      return res.data.users;
    })
    .catch((error) => {
      return error;
    });
};
