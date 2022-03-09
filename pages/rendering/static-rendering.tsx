import { gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next"
import Container from "../../components/Container/container";
import SingleCountryUI from "../../components/graphql/country";
import client from "../../constants/apollo-client";
import { COUNTRIES_QUERY } from "../../queries/apollo";
import styles from '../../styles/Home.module.css';

const StaticRendering = ({
    countries
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Container title="Apollo qraph client">
            <main className="container" >
                <div className={styles.grid}>
                    {
                        countries.map(country => (
                            <SingleCountryUI name={country.name} code={country.code} emoji={country.emoji}></SingleCountryUI>
                        ))
                    }
                </div>
            </main>
        </Container>
    )
}

export default StaticRendering;

export async function getStaticProps() {
    const { data } = await client.query({
        query: COUNTRIES_QUERY
    });

    return {
        props: {
            countries: data.countries ? data.countries.slice(0, 12) : []
        },
    }
}
