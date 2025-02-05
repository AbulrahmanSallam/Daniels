export class Validation {
  constructor(
    form,
    input1Id,
    error1Id,
    input2Id,
    error2Id,
    input3Id,
    error3Id
  ) {
    this.form = document.getElementById(form);
    this.nameInput = document.getElementById(input1Id);
    this.emailInput = document.getElementById(input2Id);
    this.messageInput = document.getElementById(input3Id);
    this.nameError = document.getElementById(error1Id);
    this.emailError = document.getElementById(error2Id);
    this.messageError = document.getElementById(error3Id);

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validation();
    });

    this.nameInput.addEventListener("input", () => {
      this.nameValidation();
    });
    this.emailInput.addEventListener("input", () => {
      this.emailValidation();
    });
    this.messageInput.addEventListener("input", () => {
      this.messageValidation();
    });
  }

  // validation
  validation() {
    this.nameValidation();
    this.emailValidation();
    this.messageValidation();
  }

  // name validation
  nameValidation() {
    this.validateName(this.nameInput.value)
      ? this.nameError.setAttribute("hidden", "true")
      : this.nameError.removeAttribute("hidden");
  }

  // email validation
  emailValidation() {
    this.validateEmail(this.emailInput.value)
      ? this.emailError.setAttribute("hidden", "true")
      : this.emailError.removeAttribute("hidden");
  }

  // message validation
  messageValidation() {
    this.validateMessage(this.messageInput.value)
      ? this.messageError.setAttribute("hidden", "true")
      : this.messageError.removeAttribute("hidden");
  }

  // name validation
  validateName(name) {
    return /^[a-zA-Z ]+$/.test(name);
  }

  // email validation
  validateEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  // message validation
  validateMessage(message) {
    return /^[\w ]{10,}$/.test(message);
  }
}
