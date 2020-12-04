<script context="module">
  export async function preload(
    this: any,
    route: {
      host: string;
      path: string;
      query: {};
      params: { id: string };
    }
  ) {
    const response = await this.fetch(url, {
      method: "POST",
      headers,
      body: gql`
        {
          Blog(ID: "${route.params.id}") {
            ref
            ts
            data {
              name
              description
              tags
              sections
              content
            }
          }
        }
      `,
    });
    return {
      blog: await response.json(),
      route,
    };
  }
</script>

<script lang="ts">
  import { headers, url, gql } from "../services/graph";
  import {
    Card,
    CardTitle,
    CardSubtitle,
    CardActions,
    Button,
    Icon,
    Divider,
  } from "svelte-materialify/src";
  import Chip from "svelte-materialify/src/components/Chip/Chip.svelte";

  import { slide } from "svelte/transition";
  export let route: {
    host: string;
    path: string;
    query: {};
    params: { id: string };
  };

  export let blog: {
    data: {
      Blog: {
        ref: string;
        ts: number;
        data: {
          name: string;
          languages: string[];
          status: string;
          description: string;
          tags: string[];
          link: string;
        };
      }[];
    };
  };
</script>

<style>
  /* your styles go here */
</style>


<pre>
  {JSON.stringify(route, undefined, 2)}
</pre>

<pre>
  {JSON.stringify(blog, undefined, 2)}
</pre>