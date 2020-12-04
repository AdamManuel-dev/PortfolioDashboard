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

<script lang="ts">
  export let route: {
    host: string;
    path: string;
    query: {};
    params: { id: string };
  };

  interface ListProjectResponse {
    data: {
        Projects: {
          ref: string;
          ts: number;
          data: {
            name: string;
            languages: string[];
            status: string;
            description: string;
          };
        }[];
      };
    }
</script>

<style>
  /* your styles go here */
</style>

<h1>{route.params.id}</h1>
