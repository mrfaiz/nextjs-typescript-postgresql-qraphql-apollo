import { useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from './layout.module.scss';

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {

    const [isOpened, setOpened] = useState(false);
    const toggleView = () => {
        setOpened(prev => !prev);
    }

    return (
        <div className={styles.Container}>
            <Header isOpened={isOpened} toggleView={toggleView} />
            <div className={styles.Content}>
                <Sidebar isOpened={isOpened} />
                <div className={styles.PageContainer}>{ children }</div>
            </div>
            <Footer />
        </div>
    )
}