import { FC } from "react"
import { ICountry } from "../../types/apollo"
import styles from '../../styles/Home.module.css';
import { MdAnchor, MdAnimation, MdFlag } from "react-icons/md";

const SingleCountryUI: FC<ICountry> = ({ name, code, emoji }) => {
    return (
        <div key={code} className={styles.card}>
            <h3><a href="#country-name" aria-hidden="true" className="aal_anchor" id="country-name">
                <MdAnimation />
            </a>{name}</h3>
            <p>
                {code} - {emoji}
            </p>
        </div>
    )
}

export default SingleCountryUI;

