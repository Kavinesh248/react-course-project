import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = function () {
  return (
    <header
      className="bg-yellow-400 border-stone-200 flex items-center justify-between px-6 py-3
 uppercase"
    >
      <Link to="/" className="tracking-[5px] text-lg">
        Fast react pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
