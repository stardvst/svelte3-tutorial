<script>
    import Renderer from "./Renderer.svelte";
    import ErrorBox from "./ErrorBox.svelte";

    import {LoadObject} from "../lib/Requests.js";
    import {token} from "../stores.js";

    export let objectId = null;
    let contentPromise = Promise.resolve({});
    $: contentPromise = LoadObject(objectId, $token);
</script>

{#await contentPromise}
  Loading...
{:then response}
  <p class="mb-2 italic">
    Saved on {response && response.date
      ? new Date(response.date).toLocaleDateString()
      : "N/A"}
  </p>
  <Renderer
    title={response && response.title ? response.title : "No title"}
    content={response && response.content ? response.content : ""}
  />
{:catch err}
  <ErrorBox {err} />
{/await}
