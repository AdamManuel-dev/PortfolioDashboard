<script context="module">
export const preload = () => {};
</script>

<script>
import { stores } from "@sapper/app";

import {
  MaterialApp,
  NavigationDrawer,
  List,
  ListItem,
  Avatar,
  Divider,
  AppBar,
} from "svelte-materialify/src";

import { onMount } from "svelte";

import Footer from "svelte-materialify/src/components/Footer/Footer.svelte";
import Switch from "svelte-materialify/src/components/Switch/Switch.svelte";
import { fade } from "svelte/transition";

let mini = true;
let sticky = false;
let theme: "light" | "dark" = "dark";
let mobile = false;
let darkmode = true;
let name = "Adam Manuel";
let title = "Portfolio CMS";

onMount(async () => {
  let breakpoints = await import("svelte-materialify/src/utils/breakpoints");
  breakpoints = breakpoints.default;

  // check if screen size is less than or equal to medium
  mobile = window.matchMedia(breakpoints["sm-and-down"]).matches;
});

function mouseenter() {
  if (!sticky) {
    mini = false;
  }
}
function mouseleave() {
  if (!sticky) {
    mini = true;
  }
  if (mobile) sticky = false;
}

export let segment: string = "";
if (segment) {
}

const { page } = stores();

let path: string;
$: path = $page.path.slice(1);
</script>

<style>
.content {
  @apply relative flex flex-col justify-start w-full mt-4;
}

.main-content {
  @apply content pl-16;
}

.main-content-sticky {
  @apply content pl-64;
}
</style>

<svelte:head>
  <title>{path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Index'}</title>
</svelte:head>
<MaterialApp theme="{theme}">
  {#if mobile}
    <AppBar fixed flat class="w-full">
      <div slot="icon">
        <button on:click="{() => (sticky = !sticky)}" class="outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 opacity-75 cursor-pointer hover:opacity-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
      <span slot="title"> {title} </span>
    </AppBar>
  {/if}
  <div
    class="{mobile ? 'flex flex-row h-screen min-h-screen mt-16' : 'flex flex-row h-screen min-h-screen'}"
  >
    <div
      class="z-30 h-full d-inline-block"
      on:mouseenter="{mouseenter}"
      on:mouseleave="{mouseleave}"
    >
      <NavigationDrawer
        mini="{!mobile ? mini : false}"
        active="{mobile ? sticky : true}"
        absolute
        fixed
      >
        <ListItem>
          <span slot="prepend" class="ml-n2">
            <Avatar size="{40}">
              <img src="//picsum.photos/200" alt="profile" />
            </Avatar>
          </span>
          {#if !mini || mobile}
            <span class="w-full underline" transition:fade>{name}</span>
          {/if}
          <div slot="append">
            {#if !sticky}
              <div class="w-full" in:fade on:click="{() => (sticky = true)}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-6 opacity-75 cursor-pointer hover:opacity-100"
                >
                  <path
                    d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                  ></path>
                </svg>
              </div>
            {/if}
            {#if sticky}
              <div class="w-full" in:fade on:click="{() => (sticky = false)}">
                {#if mobile}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6 opacity-75 cursor-pointer hover:opacity-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                {:else}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-6 opacity-75 cursor-pointer hover:opacity-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                {/if}
              </div>
            {/if}
          </div>
        </ListItem>
        <Divider />
        <List outline nav>
          <a href="/">
            <ListItem>
              <span slot="prepend" class="ml-n1">
                <!-- <Icon class="mdi mdi-home-city" /> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-9"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  ></path>
                </svg>
              </span>
              <div slot="append">
                {#if !mini || mobile}
                  <span class="w-full" transition:fade>Home</span>
                {/if}
              </div>
            </ListItem>
          </a>
          <a href="/examples/drag-drop">
            <ListItem>
              <span slot="prepend" class="ml-n1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-9"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <div slot="append">
                {#if !mini || mobile}
                  <span class="w-full" transition:fade>Drag</span>
                {/if}
              </div>
            </ListItem>
          </a>
          <a href="/examples/markdown">
            <ListItem>
              <span slot="prepend" class="ml-n1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-9"
                >
                  <path
                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <div slot="append">
                {#if !mini || mobile}
                  <span class="w-full" transition:fade>Markdown</span>
                {/if}
              </div>
            </ListItem>
          </a>
          <a href="/examples/api">
            <ListItem>
              <span slot="prepend" class="ml-n1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-9"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  ></path>
                </svg>
              </span>
              <div slot="append">
                {#if !mini || mobile}
                  <span class="w-full" transition:fade>GraphQL</span>
                {/if}
              </div>
            </ListItem>
          </a>
          <a href="/examples/table">
            <ListItem>
              <span slot="prepend" class="ml-n1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-9"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <div slot="append">
                {#if !mini || mobile}
                  <span class="w-full" transition:fade>Table</span>
                {/if}
              </div>
            </ListItem>
          </a>
          <a href="/blog">
            <ListItem>
              <span slot="prepend" class="ml-n1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-9"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <div slot="append">
                {#if !mini || mobile}
                  <span class="w-full" transition:fade>Blog</span>
                {/if}
              </div>
            </ListItem>
          </a>
          <a href="/news">
            <ListItem>
              <span slot="prepend" class="ml-n1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  ></path>
                </svg>
              </span>
              <div slot="append">
                {#if !mini || mobile}
                  <span class="w-full" transition:fade>News</span>
                {/if}
              </div>
            </ListItem>
          </a>
          <a href="/resources">
            <ListItem>
              <span slot="prepend" class="ml-n1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </span>
              <div slot="append">
                {#if !mini || mobile}
                  <span class="w-full" transition:fade>Resources</span>
                {/if}
              </div>
            </ListItem>
            <div class="flex flex-row items-center justify-end w-full mt-3">
              {#if !mini || mobile}
                <div in:fade="{{ delay: 50 }}">
                  <Switch
                    bind:checked="{darkmode}"
                    on:change="{() => {
                      if (darkmode) theme = 'dark';
                      else theme = 'light';
                    }}"
                    inset
                  >
                    Darkmode
                  </Switch>
                </div>
              {/if}
            </div>
            <a href="/projects">
              <ListItem>
                <div slot="append">
                  {#if !mini || mobile}
                    <span
                      class="w-full"
                      in:fade="{{ delay: 50 }}"
                    >Register</span>
                  {/if}
                </div>
              </ListItem>
            </a>
            <a href="/login">
              <ListItem>
                <div slot="append">
                  {#if !mini || mobile}
                    <span class="w-full" in:fade="{{ delay: 50 }}">Login</span>
                  {/if}
                </div>
              </ListItem>
            </a>
          </a>
        </List>
      </NavigationDrawer>
    </div>
    <div
      class:content="{true}"
      class:main-content="{!mobile && !sticky}"
      class:main-content-sticky="{!mobile && sticky}"
    >
      <div class="w-full h-full">
        <slot />
      </div>
      <Footer class="fixed bottom-0 justify-center pa-2" padless>
        Built by
        <span class="text-blue-700 underline"> Adam Manuel </span>
        with ♥
      </Footer>
    </div>
  </div>
</MaterialApp>
