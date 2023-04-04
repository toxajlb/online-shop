import { Dispatch, FC, SetStateAction } from "react";

import { EnumProductSort } from "@/services/product/product.types";

interface ISortDropdowm {
  sortType: EnumProductSort;
  setSortType: Dispatch<SetStateAction<EnumProductSort>>;
}

const SortDropdown: FC<ISortDropdowm> = ({ sortType, setSortType }) => {
  return (
    <div className="text-right">
      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value as any)}
        className="appearance-none py-1 px-2 bg-bg-color mb-5"
      >
        {(
          Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
        ).map((key) => {
          return (
            <option
              key={key}
              onChange={() => setSortType(EnumProductSort[key])}
              value={EnumProductSort[key]}
            >
              {EnumProductSort[key]}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SortDropdown;
