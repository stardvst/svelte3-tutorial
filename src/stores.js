import { writable, derived } from "svelte/store";
export const profile = writable(null);
export const token = writable(null);

export const authenticated = derived(
  [profile, token], // original store
  ([$profile, $token]) => { // calback with new store
  return $profile && $token;
});
export const view = writable(null);
