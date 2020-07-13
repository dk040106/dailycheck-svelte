<script>
  import { validateEmail, signIn } from "../../services/auth";

  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  let dispatch = createEventDispatcher();

  let fields = { email: "", password: "" };
  let errors = { email: "", password: "" };

  let valid = false;

  const submitHandler = () => {
    valid = true;

    // validate email
    if (!validateEmail(fields.email)) {
      valid = false;
      errors.email = "email format is not right";
    } else {
      errors.email = "";
    }

    // validate password
    if (fields.password.trim().length < 1) {
      valid = false;
      errors.password = "password cannot be empty";
    } else {
      errors.password = "";
    }

    // add new post
    if (valid) {
      signIn(fields.email, fields.password);
    } else {
      console.log(errors);
    }
  };
</script>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .form-field {
    margin: 18px auto;
  }
  .error {
    font-weight: bold;
    font-size: 14px;
    color: #d91b42;
  }
</style>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="email">이메일</label>
    <input type="email" id="email" bind:value={fields.email} />
    <div class="error">{errors.email}</div>
  </div>
  <div class="form-field">
    <label for="password">비밀번호</label>
    <input type="password" id="password" bind:value={fields.password} />
    <div class="error">{errors.password}</div>
  </div>
  <Button type="secondary">로그인</Button>
</form>
