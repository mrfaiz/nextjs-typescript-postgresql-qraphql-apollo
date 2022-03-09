import { MenuItem } from "../../constants/menu-items";
import SingleMenuItem from "../SingleMenuItem/SingleMenuItem";

type MenuItemOptions = {
    options: MenuItem[]
}

export default function MenuItems({ options }: MenuItemOptions) {
    return (
        <>
            {
                options.map(option => (
                    <SingleMenuItem option={option} key={option.id} />
                ))
            }
        </>
    );
}