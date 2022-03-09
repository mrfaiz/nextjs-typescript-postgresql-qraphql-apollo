import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IPost } from "../../types/posts";

type Props = {
    post: IPost,
    deletePost: (id: number) => void
}

const Post: React.FC<Props> = ({ post, deletePost }) => {
    const router = useRouter();
    function makeSinglePostPath(id) {
        return `${router.asPath}/${id}?data=testid`
    }
    return (
        <div className="Card">
            <div className="Card--body">
                <Link href={makeSinglePostPath(post.id)}>
                    <a><h1 className="Card-body-title">{post.title}</h1></a>
                </Link>
                <p className="Card-body-text">{post.body}</p>
            </div>
            <button className="Card__button" onClick={() => deletePost(post.id)}>
                Delete
            </button>
        </div>
    );
}

export default Post;
