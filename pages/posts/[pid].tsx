import { useRouter } from "next/router";
import Container from "../../components/Container/container";

// https://nextjs.org/docs/routing/dynamic-routes

const title: string = "Single Post";
const SinglePost = () => {

    const router = useRouter();
    const { pid, data } = router.query; // http://localhost:3000/posts/10?data=testid

    return (
        <Container title={`${title + pid}`}>
            <div>{`data=${data} pid=${pid}`}</div>
        </Container>
    );
}

export default SinglePost;