import React from "react";
import { IPost } from "../../types/posts";

type Props = {
    savePost: (e: React.FormEvent, formData: IPost) => void;
}

const AddPost: React.FC<Props> = ({ savePost }) => {
    const [formData, setFormData] = React.useState<IPost>();

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className="Form" onSubmit={(e) => savePost(e, formData)}>
            <div className="Form--field">
                <label htmlFor="name">Title</label>
                <input type="text" id="title" onChange={handleForm} />
            </div>
            <div className="Form--field">
                <label htmlFor="body">Description</label>
                <input type="text" id="body" onChange={handleForm} />
            </div>
            <button
                className="Form__button"
                disabled={formData === undefined ? true : false}
            >
                Add Post
            </button>
        </form>
    );
}

export default AddPost;