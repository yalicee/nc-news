import axios from "axios";

const NCNewsAPI = axios.create({
  baseURL: "https://yangalexyangg-news-app.herokuapp.com/api",
});

export const fetchArticles = () => {
  return NCNewsAPI.get(`/articles`).then((res) => {
    return res.data.articles;
  });
};

export const fetchTopics = () => {
  return NCNewsAPI.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};
