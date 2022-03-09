
import { IoIosArrowUp, IoIosArrowDown} from "react-icons/io";

type ExpandIconPros = {
  isExpanded: boolean,
  handleClick: () => void,
};

export default function ExpandIcon({
  isExpanded,
  handleClick,
}: ExpandIconPros) {
  return isExpanded ? (
    <IoIosArrowUp onClick={handleClick} />
  ) : (
    <IoIosArrowDown onClick={handleClick} />
  );
}