import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useProfile } from "@/hooks/userProfile";

import { UserService } from "@/services/user.service";

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile();

  const { invalidateQueries } = useQueryClient();

  const { mutate } = useMutation(
    ["toggle favorite"],
    () => UserService.toggleFavorite(productId),
    {
      onSuccess() {
        invalidateQueries(["get profile"]);
      },
    }
  );

  if (!profile) return null;

  const isExists = profile.favorites.some(
    (favorite) => favorite.id === productId
  );

  return (
    <div>
      <button onClick={() => mutate()}>
        {isExists ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </div>
  );
};

export default FavoriteButton;
