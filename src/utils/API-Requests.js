import axios from "axios";

const NCNewsAPI = axios.create({
  baseURL: "https://yangalexyangg-news-app.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  return NCNewsAPI.get(`/articles`, { params: { topic: topic } }).then(
    (res) => {
      return res.data.articles;
    }
  );
};

export const fetchTopics = () => {
  return NCNewsAPI.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const fetchSingleArticle = (article_id) => {
  return NCNewsAPI.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const patchArticle = (article_id, inc_amount) => {
  return NCNewsAPI.patch(`/articles/${article_id}`, {
    inc_votes: inc_amount,
  }).then((res) => {
    return res.data.article;
  });
};

export const fetchComments = (article_id) => {
  return NCNewsAPI.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postComment = (article_id, comment) => {
  return NCNewsAPI.post(`/articles/${article_id}/comments`, comment).then(
    (res) => {
      return res.data.comment;
    }
  );
};

export const fetchUsers = () => {
  return NCNewsAPI.get(`/users`).then((res) => {
    return res.data.users;
  });
};
