import { IStatisticResponse } from "@/types/statistic.interface";

import { instance } from "@/api/api.interceptor";

const STATISTIC = "statistic";

export const StatisticService = {
  async getAll() {
    return instance<IStatisticResponse>({
      url: `${STATISTIC}/main`,
      method: "GET",
    });
  },
};
