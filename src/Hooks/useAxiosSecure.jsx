import axios from 'axios';
import {use} from 'react';
import {AuthContext} from '../Contexts/Authprovider.jsx';

const axiosInstance = axios.create({
    baseURL: 'https://a11-lost-found-server.vercel.app'
})

const useAxiosSecure = () => {
    const {saveUser} = use(AuthContext)
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${saveUser.accessToken}`
        return config
    })
    return axiosInstance
};

export default useAxiosSecure;