import cn from "clsx";
import { FC } from "react";
import { RiShoppingCartLine } from "react-icons/ri";

import Button from "@/ui/button/Button";
import SquareButton from "@/ui/button/SquareButton";

import { useCart } from "@/hooks/useCart";
import { useOutside } from "@/hooks/useOutside";

import { convertPrice } from "@/utils/convert-price";

import CartItem from "./cart-item/CartItem";

const Cart: FC = () => {
  const { isShow, setIsShow, ref } = useOutside(false);

  const { items, total } = useCart();

  return (
    <div className="relative" ref={ref}>
      <SquareButton
        Icon={RiShoppingCartLine}
        onClick={() => {
          setIsShow(!isShow);
        }}
        number={items.length}
      />

      <div
        className={cn(
          "absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white",
          isShow ? "close-menu" : "open-menu"
        )}
      >
        <div className="text-center font-normal text-lg mb-5">My cart</div>

        <div>
          {items.length ? (
            items.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <div className="font-light">Cart is empty</div>
          )}
        </div>

        <div>
          <div>Total:</div>
          <div>{convertPrice(total)}</div>
        </div>
        <div className="text-center">
          <Button variant="white" size="sm" className="btn-link mt-5 mb-2">
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
