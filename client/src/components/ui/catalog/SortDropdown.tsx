import { FC } from "react";

import { EnumProductSort } from "@/services/product/product.types";

const SortDropdown: FC = () => {
  return (
    <div className="text-right">
      <select className="bg-bg-color mb-5">
        {(
          Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
        ).map((key) => {
          return (
            <option value={EnumProductSort[key]}>{EnumProductSort[key]}</option>
          );
        })}
      </select>
    </div>
  );
};

export default SortDropdown;
