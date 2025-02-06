import axios from "axios";

// export const NewsUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b8d4e733d9494a8ba1bf1cdee93cb975"
export const NewsUrl='https://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=b8d4e733d9494a8ba1bf1cdee93cb975'

export const NewsApiData = async () =>
  await axios.get(
  `${NewsUrl}`
);
