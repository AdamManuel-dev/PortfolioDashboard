<script context="module">
  export async function preload(
    this: any,
    route: {
      host: string;
      path: string;
      query: {};
      params: {};
    }
  ) {
    const response = await this.fetch(url, {
      method: "POST",
      headers,
      body: gql`
        {
          News {
            ref
            ts
            data {
              name
              description
              link
              tags
            }
          }
        }
      `,
    });
    return {
      resources: await response.json(),
      route,
    };
  }
</script>

<script lang="ts">
  import {
    gql,
    headers,
    url,
    getIDFromRef,
    dereference,
  } from "../services/graph";

  import { Card, CardText, CardActions, Button } from "svelte-materialify/src";
  import Chip from "svelte-materialify/src/components/Chip/Chip.svelte";

  export let resources: {
    data: {
      News: {
        ref: string;
        ts: number;
        data: {
          name: string;
          description: string;
          link: string;
          tags: string[];
        };
      }[];
    };
  };

  export let route: {
    host: string;
    path: string;
    query: {};
    params: {};
  };
</script>

<style>
  /* your styles go here */
</style>

<div
  class="flex flex-row flex-wrap items-center justify-center p-3 overflow-auto"
>
  <div class="w-full text-center">
    <h1 class="text--secondary">Articles</h1>
  </div>
  {#each resources.data.News as story}
    <a href="{'/news/' + getIDFromRef(story.ref)}" class="w-full">
      <Card outlined hover>
        <CardText>
          <div class="text--secondary">{story.data.description}</div>
          <div class="text--primary text-h4">{story.data.name}</div>
          {#each story.data.tags as chip}
            <Chip class="ma-2">{chip}</Chip>
          {/each}
        </CardText>
        <CardActions>
          <Button text class="primary-text">Learn More</Button>
        </CardActions>
      </Card>
    </a>
  {:else}
    <h2>No Records Found ☹</h2>
    <p>{JSON.stringify(route, undefined, 2)}</p>
  {/each}
</div>
