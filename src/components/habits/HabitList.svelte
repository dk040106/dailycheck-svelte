<script>
  import CheckForm from "./CheckForm.svelte";
  import Button from "../shared/Button.svelte";
  import { setCheck, getCheck } from "../../services/db";
  import { onMount } from "svelte";
  import { habitStore } from "../../stores/data";

  const getCheckData = () => {
    getCheck().then(habits => habitStore.set(habits));
  };

  const getHabitData = () => {
    getCheckData();
  };

  onMount(() => {});

  const onSubmit = () => {
    setCheck($habitStore);
    getCheckData();
    alert("기록 되었습니다");
  };
</script>

{#each $habitStore as habit}
  <CheckForm {habit} />
{/each}
<Button on:click={onSubmit}>기록하기</Button>
