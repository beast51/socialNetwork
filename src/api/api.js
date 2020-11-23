import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "69021ee3-22b2-4988-b8b7-5ace5965f59b"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    authUser() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    getUserProfile(userId) {
        console.warn('Please use profileAPI object');
        return profileAPI.getUserProfile(userId)
    },
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateProfileStatus(status) {
        return instance.put(`/profile/status`, {status: status});
    }
};


