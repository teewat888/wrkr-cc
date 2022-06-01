import { BASE_URL } from "../constants"; 

class FetchService {
    fetchAll(query) {
        console.log("fetchstm->", BASE_URL + `&q=${query}`);
        return fetch(BASE_URL + `&q=${query}`).then(resp=>resp.json())
    }
    fetchLanguage(query,language) {
         return fetch(BASE_URL + `&q=${query}+language:${language}`).then((resp) => resp.json());
    }
}
export default new FetchService();