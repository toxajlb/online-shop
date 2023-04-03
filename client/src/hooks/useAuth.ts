import { usedTypedSelector } from "./useTypedSelector";

export const useAuth = () => usedTypedSelector((state) => state.user);
