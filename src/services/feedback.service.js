import { create } from "../../backend/app/controller/feedback.controller";
import http from "../http-common";

create(data) {
    return http.post("/feedbacks", data);
}