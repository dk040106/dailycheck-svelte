<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let habit;
</script>

<style>
  div.cover {
    text-align: center;
  }
  /* The container */
  .container {
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    display: none;
  }

  /* Create a custom checkbox */
  .checkmark {
    margin-left: 1em;
    position: absolute;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>

<div class="cover">
  <label class="container">
    {habit.title}
    <input type="checkbox" bind:checked={habit.checked} />
    <span class="checkmark" />
  </label>
</div>
