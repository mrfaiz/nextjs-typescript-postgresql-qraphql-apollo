import { useQuery } from "@apollo/client";
import { MdDownloading } from "react-icons/md";
import Container from "../../components/Container/container";
import SingleCountryUI from "../../components/graphql/country";
import { COUNTRIES_QUERY } from "../../queries/apollo";
import styles from '../../styles/Home.module.css';

export default function ClientSideRendering() {

    const { data, loading, error } = useQuery(COUNTRIES_QUERY);
    if (loading) {
        return (
            <h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading">
                <MdDownloading />
            </a>Loading...
            </h2>
        )
    }

    if (error) {
        console.error(error);
        return null;
    }
    const countries = data.countries ? data.countries.slice(0, 12) : [];

    return (
        <Container title="Client Side Rendering">
            <main className="container">
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