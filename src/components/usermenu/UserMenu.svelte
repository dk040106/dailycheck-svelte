<script>
  import { signOut } from "../../services/auth";
  import { userStore } from "../../stores/data";

  import Card from "../shared/Card.svelte";
  import Button from "../shared/Button.svelte";

  if ($userStore.email === undefined) {
    signOut();
  }
</script>

<style>
  h2 {
    margin: 10px;
  }
</style>

<Card>
  <h2>안녕하세요!</h2>
  <p>{$userStore.email}으로 로그인 하였습니다.</p>
  <Button on:click={() => signOut()}>로그아웃</Button>
</Card>
