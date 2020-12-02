<script>
// your script goes here
</script>

<style>
/* your styles go here */
</style>

<div class="w-full p-3">
  <table class="w-full border-collapse">
    <thead>
      <tr>
        <th
          class="hidden p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300 lg:table-cell"
        >
          Company name
        </th>
        <th
          class="hidden p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300 lg:table-cell"
        >
          Country
        </th>
        <th
          class="hidden p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300 lg:table-cell"
        >
          Status
        </th>
        <th
          class="hidden p-3 font-bold text-gray-600 uppercase bg-gray-200 border border-gray-300 lg:table-cell"
        >
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="flex flex-row flex-wrap mb-10 bg-white lg:hover:bg-gray-100 lg:table-row lg:flex-row lg:flex-no-wrap lg:mb-0"
      >
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Company name</span>
          KnobHome
        </td>
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Country</span>
          German
        </td>
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Status</span>
          <span
            class="px-3 py-1 text-xs font-bold bg-red-400 rounded"
          >deleted</span>
        </td>
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Actions</span>

          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="text-blue-400 underline hover:text-blue-600">Edit</a>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="pl-6 text-blue-400 underline hover:text-blue-600">Remove</a>
        </td>
      </tr>
      <tr
        class="flex flex-row flex-wrap mb-10 bg-white lg:hover:bg-gray-100 lg:table-row lg:flex-row lg:flex-no-wrap lg:mb-0"
      >
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Company name</span>
          Squary
        </td>
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Country</span>
          Schweden
        </td>
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Status</span>
          <span
            class="px-3 py-1 text-xs font-bold bg-green-400 rounded"
          >active</span>
        </td>
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Actions</span>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="text-blue-400 underline hover:text-blue-600">Edit</a>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="pl-6 text-blue-400 underline hover:text-blue-600">Remove</a>
        </td>
      </tr>
      <tr
        class="flex flex-row flex-wrap mb-10 bg-white lg:hover:bg-gray-100 lg:table-row lg:flex-row lg:flex-no-wrap lg:mb-0"
      >
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Company name</span>
          ghome
        </td>
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Country</span>
          Switzerland
        </td>
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Status</span>
          <span
            class="px-3 py-1 text-xs font-bold bg-yellow-400 rounded"
          >inactive</span>
        </td>
        <td
          class="relative block w-full p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static"
        >
          <span
            class="absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase bg-blue-200 lg:hidden"
          >Actions</span>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="text-blue-400 underline hover:text-blue-600">Edit</a>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="pl-6 text-blue-400 underline hover:text-blue-600">Remove</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
