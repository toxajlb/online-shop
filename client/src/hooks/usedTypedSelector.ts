import { TypedUseSelectorHook, useSelector } from "react-redux";

import { TypeRootState } from "@/store/store";

export const usedTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
