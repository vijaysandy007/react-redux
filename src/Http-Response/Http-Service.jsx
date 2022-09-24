import React from "react";
import baseUrl from './Http-Headers'

class HttpService{
    getAllUsers(){
        return baseUrl.get('/users')
    }

    updateuserList(id, val){
        return baseUrl.patch(`/posts/${id}`, val)
    }
}

export default new HttpService();