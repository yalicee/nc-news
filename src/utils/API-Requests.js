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
