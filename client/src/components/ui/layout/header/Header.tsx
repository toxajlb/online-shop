import Link from "next/link";
import { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";

import { useAuth } from "@/hooks/useAuth";

import HeaderProfile from "./HeaderProfile";
import HeaderCart from "./cart/HeaderCart";

const Header: FC = () => {
  const { user } = useAuth();
  return (
    <header
      className="bg-secondary w-full py-6 px-6 grid"
      style={{ gridTemplateColumns: "1fr 3fr 1.2fr" }}
    >
      <Link className="text-white" href="/">
        Next shop
      </Link>
      {/*  <SearchPage /> */}
      <div className="flex items-center justify-end gap-10">
        <Link href="/favorites" className="text-white">
          <AiOutlineHeart size={28} />
        </Link>
        <HeaderCart />
        {!!user && <HeaderProfile />}
      </div>
    </header>
  );
};

export default Header;
