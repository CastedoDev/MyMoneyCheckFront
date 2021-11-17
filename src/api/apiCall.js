import axios from "axios";
import * as SecureStore from "expo-secure-store";


const apiCall = async (method, path, body, withToken) => {

    const baseURL = "http://localhost:8080/v1/"

    if (method === "POST" || method === "PUT") {
        let response;
        if (withToken === true){
            let tokenValue = SecureStore.getItemAsync("token");
            let config = {
                headers: {
                    Authorization: tokenValue
                }
            }
            response = await axios.post(baseURL + path, body, config);
        } else {
            response = await axios.post(baseURL + path, body);
        }
        return response
    }

}

export default apiCall;
