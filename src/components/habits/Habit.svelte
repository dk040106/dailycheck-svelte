<script>
  import Card from "../shared/Card.svelte";
  import HabitList from "./HabitList.svelte";
  import { dateStringKorean } from "../../stores/data";
</script>

<style>

</style>

<Card>
  <h2>{dateStringKorean}</h2>
  <HabitList />
</Card>
