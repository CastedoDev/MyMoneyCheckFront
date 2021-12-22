import axios from "axios";
import * as SecureStore from "expo-secure-store";


const apiCall = async (method, path, body, withToken) => {

    const baseURL = "http://localhost:8080/v1/"
    let config;

    if (withToken === true) {
        let tokenValue = SecureStore.getItemAsync("token");
        config = {
            headers: {
                Authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjYXJsb3MiLCJleHAiOjE2NDAwNzM2MDIsImlhdCI6MTY0MDA1NTYwMn0.FO7kUr7IindOxyuPbRqCEnGUnsxhyuDWw0k2H7DlhxqMNiDAcuXmBNLyjeWjjg_-fRHkjoUwSqiE2XIs5hAcEw"
            }
        }
    }

    let response;

    if (method === "POST" || method === "PUT") {
        response = await axios.post(baseURL + path, body, config);

    } else if (method === "GET") {
        response = await axios.get(baseURL + path, config);
    }

    return response;

}

export default apiCall;
