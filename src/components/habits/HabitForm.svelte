<script>
  import CheckForm from "./CheckForm.svelte";
  import Button from "../shared/Button.svelte";
  import { setCheck } from "../../services/db";
  import { habitStore } from "../../stores/data";
</script>

{#each $habitStore as habit}
  <CheckForm {habit} />
{/each}
<Button on:click={() => setCheck($habitStore)}>Submit</Button>
