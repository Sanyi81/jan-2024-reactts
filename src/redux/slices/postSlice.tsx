import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {postService} from "../../services/api.service";
import {AxiosError} from "axios";

type PostSliceType = {
    posts: IPost[];
    post: IPost | null;
    isLoaded: boolean
};

const postInitialState: PostSliceType = {
    posts: [],
    post: null,
    isLoaded: false
};

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAll();
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const loadPostById = createAsyncThunk(
    'postSlice/loadPostById',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                const post = await postService.getById(id);
                thunkAPI.dispatch(postActions.changeLoadState(true))
                return thunkAPI.fulfillWithValue(post);
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return null;
    }
);

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadPosts.fulfilled,
                (state, action) => {
                    state.posts = action.payload
                })
            .addCase(
                loadPosts.rejected,
                (state, action) => {
                }
            )
            .addCase(
                loadPostById.fulfilled,
                (state, action) => {
                    state.post = action.payload
                })
            .addCase(
                loadPostById.rejected,
                (state, action) => {
                }
            )
            .addMatcher(isFulfilled(loadPostById, loadPosts), (state, action) => {
                state.isLoaded = true
            })
});

export const postActions = {
    ...postSlice.actions,
    loadPosts,
    loadPostById
}