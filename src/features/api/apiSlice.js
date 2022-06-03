import { createApi } from '@reduxjs/toolkit/query/react';
import { createSelector } from '@reduxjs/toolkit';
import Axios from 'axios';

const jwt = localStorage.getItem('jwt');
const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: '' }) =>
        async ({ url, method, data, params }) => {
            try {
                if(jwt) {
                    Axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
                    Axios.defaults.headers.common['Content-Type'] = `application/json`;
                }
                const result = await Axios({ url: baseUrl + url, method, data, params })
                return { data: result.data }
            } catch (axiosError) {
                let err = axiosError
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }
            }
        }









export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ['Post', 'User'],
    endpoints(build) {
        return {
            getUser: build.query({
                query: () => ({url: '/user', method: 'get'}),
                invalidatesTags: ['User']
            }),
            logUser: build.mutation({
                query: ({data}) => ({
                    url: '/login',
                    method: 'POST',
                    data,
                    
                }),
                providesTags: ['User']
            }),
            registerUser: build.mutation({
                query: ({data}) => ({
                    url: '/register',
                    method: 'POST',
                    data, 

                }),
                providesTags: ['User']
            }),
            getPosts: build.query({
                query: (user) => ({ url: '/gallery', params: user }),
                providesTags: ['Post']
            }),
            addPost: build.mutation({
                query: ({initialPost, user}) => ({
                    url: '/gallery',
                    method: 'POST',
                    params: {user: user},
                    data: initialPost,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }),
                invalidatesTags: ['Post']
            }),
            deletePost: build.mutation({
                query: ({postData, user}) => ({
                    url: '/gallery',
                    method: 'DELETE', 
                   data: {id: postData.id, user: user }
                }),
                invalidatesTags: ['Post'],
            })
        }
    }
})


const emptyUser = {};

export const selectUserResult = apiSlice.endpoints.getUser.select();

export const selectUser = createSelector(
    selectUserResult,
    userResult => userResult?.data ?? emptyUser
);

export const { useRegisterUserMutation,useLogUserMutation ,useDeletePostMutation,useGetPostsQuery, useGetUserQuery, useAddPostMutation } = apiSlice;





