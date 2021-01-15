import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
// axios.defaults.headers.common["Authorizatios"] = "AUTH_TOKEN";

export default axios;
