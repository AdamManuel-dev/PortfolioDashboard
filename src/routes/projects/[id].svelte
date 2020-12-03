<script context="module">
export async function preload(route: {
  host: string;
  path: string;
  query: {};
  params: { id: string };
}) {
  return { route };
}
</script>

<script>
export let route: {
  host: string;
  path: string;
  query: {};
  params: { id: string };
};
</script>

<style>
/* your styles go here */
</style>

<h1>{route.params.id}</h1>
