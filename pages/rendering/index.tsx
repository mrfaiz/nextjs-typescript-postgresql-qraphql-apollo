import Container from "../../components/Container/container";
import { Rendering } from "../../constants/renering";

/**
 * Three ways to fetch and render data: static, server-side, and client-side
 */
export default function RenderingHome() {
    return (
        <Container title="Rendering Home">
            <main className="container">
                {
                    Rendering.map(obj => (
                        <div className="">
                            <h1> {obj.key}</h1>
                            <p>{obj.description}</p>
                        </div>
                    ))
                }
            </main>
        </Container>
    )
}