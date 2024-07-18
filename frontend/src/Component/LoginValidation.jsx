function LoginValidation(values) {
  let error = {};

  const email_pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email did not match";
  } else {
    error.email = "";
  }

  return error;
}

export default LoginValidation;
