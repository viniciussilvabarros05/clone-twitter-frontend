import NavItem from "@/components/navigation/nav-item";
import NavLogout from "@/components/navigation/nav-logout";
import { Logo } from "@/components/ui/logo";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

type Props = {
    children:ReactNode;
}
export default function Layout({children}:Props) {
  return (
    <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
      <section className="flex lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-gray-900">
        <div className="flex-1 mt-6">
            <Logo size={24}/>
            <nav className="mt-11">
                <NavItem href="/home" icon={faHouse} label="Página inicial" />
                <NavItem href="/profile" icon={faUser} label="Meu perfil" />
            </nav>
        </div>
        <div>
            <NavLogout/>
        </div>
      </section>
      <section className="flex-1 max-w-lg">
        {children}
      </section>
      <aside className="hidden lg:flex flex-col sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-900">

      </aside>
    </main>
  );
}
