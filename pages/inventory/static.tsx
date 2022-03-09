import { useRouter } from "next/router";
import Container from "../../components/Container";

// https://nextjs.org/docs/routing/dynamic-routes

const title: string = "Single Post";
const Static = () => {

    const router = useRouter();

    return (
        <Container title={`${title}`}>
            <div className="textAlingLeft">
                <h2>Caveats</h2>
                <ul>
                    <li>
                        <h1>Predefined routes take precedence over dynamic routes, and dynamic routes over catch all routes. Take a look at the following examples:</h1>
                    </li>

                    <ul>
                        <li>pages/post/create.js - Will match /post/create</li>
                        <li>pages/post/[pid].js - Will match /post/1, /post/abc, etc. But not /post/create</li>
                        <li>pages/post/[...slug].js - Will match /post/1/2, /post/a/b/c, etc. But not /post/create, /post/abc</li>
                    </ul>
                    <li>Pages that are statically optimized by Automatic Static Optimization will be hydrated without their route parameters provided, i.e query will be an empty object ({ }).</li>
                </ul>
                <br />
                After hydration, Next.js will trigger an update to your application to provide the route parameters in the query object.
                <p>
                    <a href="https://nextjs.org/docs/routing/dynamic-routes">More...</a>
                </p>
            </div>

        </Container>
    );
}

export default Static;