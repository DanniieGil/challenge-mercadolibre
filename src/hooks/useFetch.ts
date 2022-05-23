import axios from 'axios';

enum methodFetchsProps {
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
}

type useFetchProps = {
  url: string;
  method?: methodFetchsProps;
};

export const useFetch = ({ url }: useFetchProps) => {
  const response = axios
    .get(url)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export default useFetch;
