import { writable, derived } from "svelte/store";
export const profile = writable(null);
export const token = writable(null);

export const authenticated = derived([profile, token], ([$profile, $token]) => {
  return $profile && $token;
});
export const view = writable(null);
