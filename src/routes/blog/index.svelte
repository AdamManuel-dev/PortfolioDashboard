<script lang="ts">
  interface GetBlogResponse {
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
  }
</script>

<style>
  /* your styles go here */
</style>

<h1>BLOG</h1>
