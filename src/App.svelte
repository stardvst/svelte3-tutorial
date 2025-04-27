<script>
  import List from "./components/List.svelte";
  import Obj from "./components/Obj.svelte";

  const content =
    `# Markdown here!` +
    `\nHere's a **bold** text and a [link](https://example.com).`;
</script>

<List date={Date.now() / 1000} />
<Obj objectId="00000000-0000-0000-0000-000000000000" />
