import { InferGetStaticPropsType } from "next";
import React from "react";
import Container from "../../components/Container/container";
import AddPost from "../../components/posts/AddPost";
import Post from "../../components/posts/Post";
import { IPost } from "../../types/posts";

const POST_API: string = "https://jsonplaceholder.typicode.com/posts";
export default function Posts({
    posts
}: InferGetStaticPropsType<typeof getStaticProps>) {

    const [postList, setPostList] = React.useState(posts);
    const addPost = async (e: React.FormEvent, formData: IPost) => {
        e.preventDefault();
        const post: IPost = {
            id: Math.random(),
            title: formData.title,
            body: formData.body
        }
        setPostList([post, ...postList]);
    }

    const deletePost = async (id: number) => {
        const posts: IPost[] = postList.filter((post: IPost) => post.id !== id);
        setPostList(posts);
    }

    if (!postList) {
        return (
            <Container title="Loading...">
                <div>Please Wait. Loading...</div>
            </Container>
        );
    }

    return (
        <Container title="Public Posts">
            <main className="container">
                <h1>My Posts</h1>
                <AddPost savePost={addPost}></AddPost>
                {
                    postList.map(post => (
                        <Post key={post.id} deletePost={deletePost} post={post}></Post>
                    ))
                }
            </main>
        </Container>
    );
}

export async function getStaticProps() {
    const response = await fetch(POST_API);
    const posts: IPost[] = await response.json();
    return {
        props: {
            posts
        }
    }
}