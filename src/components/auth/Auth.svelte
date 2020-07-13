<script>
  import Tabs from "../shared/Tabs.svelte";
  import SignIn from "./SignIn.svelte";
  import CreateAccount from "./CreateAccount.svelte";

  // tabs
  let items = ["Sign In", "Create Account"];
  let activeItem = "Sign In";
  const tabChangeHandler = event => (activeItem = event.detail);

  const toLoginPage = () => {
    activeItem = "Sign In";
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
  {#if activeItem === 'Sign In'}
    <SignIn />
  {:else if activeItem === 'Create Account'}
    <CreateAccount on:onCreateUser={toLoginPage} />
  {/if}
</div>
