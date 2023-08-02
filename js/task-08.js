const form = document.querySelector('.login-form');
const user = {};
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password }
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Uzupełnij wszystkie pola!");
  }
  
  user.email = email.value;
  user.password = password.value;
  console.log(user);
  
  e.currentTarget.reset();
}