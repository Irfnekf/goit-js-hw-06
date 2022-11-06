const ref = document.querySelector(".login-form");

const onFormTarget = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  const elems = {
    email: email.value,
    password: password.value,
  };

  event.currentTarget.reset();
};

ref.addEventListener("submit", onFormTarget);
