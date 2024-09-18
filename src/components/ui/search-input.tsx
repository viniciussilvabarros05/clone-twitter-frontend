"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "./input";

type Props = {
  defaultValue?: string;
  hideOnSearch?: boolean;
};

const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState(defaultValue);
  function handleSearchEnter() {
    if (searchInput) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  }

  if (hideOnSearch && pathname == "/search") return null;
  return (
    <Input
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      filled
      value={searchInput}
      onChange={(e) => setSearchInput(e)}
      onEnter={handleSearchEnter}
    />
  );
};

export default SearchInput;
