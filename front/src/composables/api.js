import { useAxios } from "@vueuse/integrations/useAxios";
import { api } from "src/boot/axios";

/**
 * Ce composable permet de faire une requète API.
 * Si vous souhaitez intéragir avec une ressource, voyez plutôt useResource
 * @param  {...any} args
 * @returns
 */
const useAPIRequest = (...args) => {
  return useAxios(...args, api);
};

/**
 * Ce composable permet de faire une requète API déclanchée manuellement
 * plus tard.
 * Si vous souhaitez intéragir avec une ressource, voyez plutôt useResource
 * @param  {...any} args
 * @returns
 */
const useDeferredAPIRequest = (...args) => {
  return useAxios(...args, api, { immediate: false });
};

export { useAPIRequest, useDeferredAPIRequest };
