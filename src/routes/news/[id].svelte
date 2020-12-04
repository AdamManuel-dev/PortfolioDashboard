<script context="module">
  async function preload(route: {
    host: string;
    path: string;
    query: {};
    params: { id: string };
  }) {
    return { route };
  }
</script>

<script lang="ts">
  let route: {
    host: string;
    path: string;
    query: {};
    params: { id: string };
  };

  interface GetStoryResponse {
    data: {
      New: {
        ref: string;
        ts: number;
        data: {
          name: string;
          description: string;
          link: string;
          tags: string[];
        };
      };
    };
  }
</script>

<style>
  /* your styles go here */
</style>

<h1>{route.params.id}</h1>
