<script>
  import { createUser, validateEmail } from "../../services/auth";

  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  let dispatch = createEventDispatcher();

  let fields = { email: "", password: "", passwordVal: "" };
  let errors = { email: "", password: "", passwordVal: "" };

  let valid = false;

  const submitHandler = () => {
    valid = true;

    // validate email
    if (!validateEmail(fields.email)) {
      valid = false;
      errors.email = "이메일 형식이 맞지 않습니다.";
    } else {
      errors.email = "";
    }

    // validate password
    if (fields.password.trim().length < 1) {
      valid = false;
      errors.password = "비밀번호는 없을 수 없습니다.";
    } else {
      errors.password = "";
    }

    // validate passwordVal
    if (fields.passwordVal.trim() != fields.password.trim()) {
      valid = false;
      errors.passwordVal = "비밀번호와 맞지 않습니다.";
    } else {
      errors.passwordVal = "";
    }

    // add new post
    if (valid) {
      createUser(fields.email, fields.password);
      dispatch("onCreateUser");
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
  <div class="form-field">
    <label for="passwordVal">비밀번호 확인</label>
    <input type="password" id="passwordVal" bind:value={fields.passwordVal} />
    <div class="error">{errors.passwordVal}</div>
  </div>
  <Button type="secondary">계정 만들기</Button>
</form>
