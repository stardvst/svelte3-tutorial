<script>
  import Obj from "./Obj.svelte";
  import { fade } from "svelte/transition";

  export let objectId = null;
</script>

<div in:fade>
  <Obj {objectId} />
</div>
