import axiosInstance from './axiosInstance';
import { GetStatFeResponse } from './type';

export const getStatFe = async () => {
    const response = await axiosInstance<GetStatFeResponse>('/api/stat/fe');
    return response.data;
};

export const getStatBe = async () => {
    const response = await axiosInstance<GetStatFeResponse>('/api/stat/be');
    return response.data;
};
