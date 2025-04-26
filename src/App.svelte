<script>
  import Renderer from "./components/Renderer.svelte";

  const content =
    `# Markdown here!` +
    `\nHere's a **bold** text and a [link](https://example.com).`;
</script>

<Renderer title="Hello, Svelte!" {content} />
