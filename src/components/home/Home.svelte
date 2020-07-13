<script>
  import Habit from "../habits/Habit.svelte";
  import UserMenu from "../usermenu/UserMenu.svelte";
</script>

<style>
  .usermenu {
    text-align: center;
    margin: 30px;
  }
</style>

<div class="usermenu">
  <UserMenu />
  <Habit />
</div>
