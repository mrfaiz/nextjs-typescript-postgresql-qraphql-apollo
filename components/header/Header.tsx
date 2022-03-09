import {
    IoIosArrowBack,
    IoMdMenu,

} from 'react-icons/io';

import styles from './header.module.scss';

type HeaderProps = {
    isOpened: boolean,
    toggleView: () => void
}

export default function Header({ isOpened, toggleView }: HeaderProps) {
    return (
        <header className={styles.HeaderContainer}>
            <div className={styles.IconContainer} onClick={toggleView}>
                {isOpened ? <IoIosArrowBack/> : <IoMdMenu />}
            </div>
            <div className={styles.TitleContainer}>This is Header</div>
        </header>
    );
}