// import styles from './sidebar.module.css'
import { MENU_ITEMS } from '../../constants/menu-items';
import MenuItems from '../MenuItems/MenuItems';
import styles from './sidebar.module.scss';

type SidebarPros = {
    isOpened: boolean
}

export default function Sidebar({ isOpened }: SidebarPros) {

    return (
        <aside className={isOpened ? styles.SidebarOpened : styles.SidebarClosed}>
            <MenuItems options={MENU_ITEMS}></MenuItems>
        </aside>
    )
}