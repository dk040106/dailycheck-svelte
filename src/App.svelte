<script>
  import { auth } from "./services/firebase";
  import { isEmailVerified, signOut } from "./services/auth";
  import { userStore } from "./stores/data";

  import Header from "./components/layouts/Header.svelte";
  import Footer from "./components/layouts/Footer.svelte";

  import Home from "./components/home/Home.svelte";
  import Auth from "./components/auth/Auth.svelte";

  auth.onAuthStateChanged(userState => {
    if (userState && isEmailVerified()) {
      selected = options[1];
    } else {
      selected = options[0];
    }
  });

  const options = [
    { title: "loggedOut", component: Auth },
    { title: "loggedIn", component: Home }
  ];

  let selected = options[0];

  if ($userStore.email === undefined) {
    signOut();
  }
</script>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>

<Header />
<main>
  <svelte:component this={selected.component} />
</main>
<Footer />
