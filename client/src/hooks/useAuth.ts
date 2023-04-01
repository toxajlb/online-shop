import { usedTypedSelector } from "./usedTypedSelector";

export const useAuth = () => usedTypedSelector((state) => state.user);
