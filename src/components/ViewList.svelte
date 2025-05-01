<script>
  import Calendar from "./Calendar.svelte";
  import List from "./List.svelte";
  import { fade } from "svelte/transition";

  let date = null;
  $: console.log("Received date prop:", date);
</script>

<div in:fade>
  <Calendar bind:date />
  <List bind:date />
</div>
