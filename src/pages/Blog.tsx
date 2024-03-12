import React, {useState} from 'react';
import {postAPI} from "../services/PostService.ts";
import PostItem from "../UI/loop/PostItem/PostItem.tsx";
import {IPost} from "../models/IPost.ts";

const Blog = () => {
    const [limit, setLimit] = useState(10);

    const {data: posts, isError, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost] = postAPI.useCreatePostMutation()
    const [updatePost] = postAPI.useUpdatePostMutation()
    const [deletePost] = postAPI.useDeletePostMutation()

    async function handleCreate() {
        const title = prompt();
        await createPost({title: title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <button onClick={() => refetch()}>Refresh</button>
            <button onClick={() => handleCreate()}>Create</button>

            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Error</h1>}
            {posts && posts.map(post =>
                <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}></PostItem>
            )}

        </div>
    );
};

export default Blog;