import { useQuery } from "@tanstack/react-query";

import { errorCatch } from "@/api/api.helper";

import { UserService } from "@/services/user.service";

export const useProfile = () => {
  const { data } = useQuery(["get profile"], () => UserService.getProfile(), {
    select: ({ data }) => data,
    onError: (error) => {
      console.log(errorCatch(error));
    },
  });

  return { profile: data };
};
