function LoginValidation(values) {
  let error = {};

  const email_pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const password_pattern = /^(?=.*[a-z])(?=.{8,})$/;

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email did not match";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    error.email = "Password should not be empty";
  } else if (!password_pattern.test(values.email)) {
    error.password = "Email did not match";
  } else {
    error.password = "";
  }
  if (values.name === "") {
    error.name = "Email should not be empty";
  } else {
    error.name = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password did not match";
  } else {
    error.password = "";
  }

  return error;
}

export default LoginValidation;
