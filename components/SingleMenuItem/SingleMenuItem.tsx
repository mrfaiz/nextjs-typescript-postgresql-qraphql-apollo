import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MenuItem } from "../../constants/menu-items";
import ExpandIcon from "../ExpandIcon/ExpandIcon";
import MenuItems from "../MenuItems/MenuItems";
import styles from "./single-menu-item.module.scss";

type MenuItemProps = {
    option: MenuItem
}

export default function SingleMenuItem({ option }: MenuItemProps) {
    const [isExpanded, toggleExpanded] = useState(false);
    const router = useRouter();
    const selected = router.asPath === option.url;
    const isNested = option.subItems && option.subItems?.length > 0;
    const onClick = () => {
        toggleExpanded((prev) => !prev);
    };

    return (
        <>
            <a className={`${styles.MenuItem} ${selected ? styles.selected : ""}`}>
                <Link href={option.url} passHref>
                    <div className="menu-item">
                        <option.icon />
                        <span>{option.name}</span>
                    </div>
                </Link>
                {isNested ? (
                    <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
                ) : null}
            </a>
            {isExpanded && isNested ? <MenuItems options={option.subItems} /> : null}
        </>
    );
}