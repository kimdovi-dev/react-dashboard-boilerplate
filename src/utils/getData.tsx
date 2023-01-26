import Axios from "axios";

const baseUrl = "localhost:5000";

export const getData = ( url:string) => {
  const result = Axios.get(`${baseUrl}/${url}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return result;
};

