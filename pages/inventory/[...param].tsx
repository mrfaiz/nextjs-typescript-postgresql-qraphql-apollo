import { useRouter } from "next/router";
import Container from "../../components/Container";

// https://nextjs.org/docs/routing/dynamic-routes
/**
 * { } // GET `/post` (empty object)
{ "slug": ["a"] } // `GET /post/a` (single-element array)
{ "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)
 */

const title: string = "Dynamic route: Variable path";
const VarableArguments = () => {

    const router = useRouter();
    const { param } = router.query; // http://localhost:3000/posts/10?data=testid
    // http://localhost:3000/inventory/a/b/c
    return (
        <Container title={`${title}`}>
            <div>{param.length}</div>
        </Container>
    );
}

export default VarableArguments;