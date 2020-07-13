<script>
  import Card from "../shared/Card.svelte";
  import HabitForm from "./HabitForm.svelte";
  import { setCheck, getCheck } from "../../services/db";
</script>

<style>

</style>

<Card>
  <h2>Hello World</h2>
  <HabitForm />
</Card>
