import { faHouse, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "../navigation/nav-item";
import NavLogout from "../navigation/nav-logout";
import { Logo } from "../ui/logo";
import SearchInput from "../ui/search-input";

type Props = {
  closeAction: () => void;
};
const HomeMenu = ({ closeAction }: Props) => {
  return (
    <div className="lg:hidden inset-0 p-6">
      <div className="my-6">
        <SearchInput />
      </div>
      <div>
        <NavItem href="/home" icon={faHouse} label="Página inicial" />
        <NavItem href="/profile" icon={faUser} label="Meu perfil" />
        <NavLogout />
      </div>
    </div>
  );
};

export default HomeMenu;
