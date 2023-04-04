import Link from "next/link";
import { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Header: FC = () => {
  return (
    <header
      className="bg-secondary w-full py-6 px-6 grid"
      style={{ gridTemplateColumns: "1fr 3fr 1.2fr" }}
    >
      <Link className="text-white" href="/">
        Next shop
      </Link>
      <div className="flex items-center justify-end gap-10">
        <Link href="/favorites" className="text-white">
          <AiOutlineHeart size={28} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
