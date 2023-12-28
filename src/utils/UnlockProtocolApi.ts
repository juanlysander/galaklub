import axios, { AxiosRequestConfig } from "axios";

/**
 *
 * @returns lock metadata
 */
export const fetchLockMetadata = async (network: number, lockAddress: string) => {
  const config: AxiosRequestConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://locksmith.unlock-protocol.com/v2/api/metadata/${network}/locks/${lockAddress}`,
    headers: {
      Accept: "application/json",
    },
  };

  return axios
    .request(config)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

/**
 *
 * @returns purchase method list
 */
export const fetchLockPurchaseMethodList = async () => {
  const config: AxiosRequestConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://locksmith.unlock-protocol.com/v2/purchase/list`,
    headers: {
      Accept: "application/json",
    },
  };

  return axios
    .request(config)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
