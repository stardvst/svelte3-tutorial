<script>
  import Calendar from "./Calendar.svelte";
  import List from "./List.svelte";

  let date = null;
  $: console.log("Received date prop:", date);
</script>

<Calendar bind:date />
<List bind:date />
