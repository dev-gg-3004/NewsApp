import axios from "axios";
import { NEWS_API_URL } from "@env";


export const NewsApiData = async () =>{  
  return await axios.get(
    `${NEWS_API_URL}`
  );
}
  