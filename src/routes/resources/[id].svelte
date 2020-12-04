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
      Resource(ID:"${route.params.id}") {
        ref
        ts
        data {
          name
          languages
          status
          description
          tags
          link
        }
      }
    }
`,
    });
    return {
      response: await response.json(),
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

  export let response: {
    data: {
      Resource: {
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
      };
    };
  };

  let active = false;
  function toggle() {
    active = !active;
  }

  // export let route: {
  //   host: string;
  //   path: string;
  //   query: {};
  //   params: { id: string };
  // };
</script>

<style>
  /* your styles go here */
</style>

<h1>Resource Record</h1>

<div class="flex flex-row items-center justify-center">
  <div class="w-11/12">
    <Card>
      <img
        alt="Wikipedia"
        class="w-auto h-20 mr-4"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png"
      />
      <CardTitle>{response.data.Resource.data.name}</CardTitle>
      <CardSubtitle>{response.data.Resource.data.description}</CardSubtitle>
      {#each response.data.Resource.data.tags as tag}
        <Chip class="ma-2 red white-text">{tag}</Chip>
      {/each}
      {#each response.data.Resource.data.languages as tag}
        <Chip class="ma-2 green white-text">{tag}</Chip>
      {/each}
      <CardActions>
        <Button text>Edit</Button>
        <div class="w-20 ml-auto cursor-pointer" on:click="{toggle}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="transition-transform duration-100 ease-in-out transform"
            class:rotate-0="{!active}"
            class:rotate-180="{active}"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </CardActions>
      {#if active}
        <Divider />
        <div
          transition:slide
          class="flex flex-row flex-wrap items-center justify-center w-full h-full p-0 mb-4 md:p-12"
        >
          <h4 class="w-full p-3 text-xs text-right md:text-lg">
            Access this directly by clicking
            <a
              href="{response.data.Resource.data.link}"
              class="underline"
            >here!</a>
          </h4>
          <iframe
            src="{response.data.Resource.data.link}"
            title="GraphQL Explorer"
            class="w-full rounded"
            style="height: 600px"
          ></iframe>
        </div>
      {/if}
    </Card>
  </div>
</div>
