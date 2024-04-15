import request from "@/utils/request";

// 登录
export const login = (data) => request.post("/user/login", data);
export const updatePassword = (data) => request.post("/api/player/edit", data);
