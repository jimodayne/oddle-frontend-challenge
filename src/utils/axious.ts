import axios from "axios";
import { PERSONAL_TOKEN } from "../constants";

const instance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `token ${PERSONAL_TOKEN}`,
    },
});

export default instance;
