<script>
  import Tabs from "../shared/Tabs.svelte";
  import SignIn from "./SignIn.svelte";
  import CreateAccount from "./CreateAccount.svelte";

  // tabs
  let items = ["로그인", "계정 만들기"];
  let activeItem = "로그인";
  const tabChangeHandler = event => (activeItem = event.detail);

  const toLoginPage = () => {
    activeItem = "로그인";
  };
</script>

<style>
  .main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>

<div class="main">
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  {#if activeItem === '로그인'}
    <SignIn />
  {:else if activeItem === '계정 만들기'}
    <CreateAccount on:onCreateUser={toLoginPage} />
  {/if}
</div>
