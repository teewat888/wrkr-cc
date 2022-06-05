import { BASE_URL } from "../constants";

export const getRepo = (query, language) => {
    return fetch(BASE_URL + `&q=${query}+language:${language}`).then((resp) =>
      resp.json()
    );
};