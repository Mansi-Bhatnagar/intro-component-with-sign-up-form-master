"use strict";
const fields = document.querySelectorAll(".form input");
const btn = document.querySelector("button");
let flag = 1;
function check() {
  fields.forEach((field) => {
    if (field.value === "") {
      flag = 0;
      field.classList.add("error");
      field.classList.add("transparent");
      var element = document.querySelector(`#${field.name.split(" ")[0]}`);
      if (typeof element === "undefined" || element === null) {
        const msg = document.createElement("h4");
        msg.innerHTML = `<h4 class="errmsg" id="${field.name.split(" ")[0]}">${
          field.name
        } cannot be empty</h4>`;
        field.insertAdjacentHTML("afterend", msg.innerHTML);
      }
    }
    if (field.value !== "") flag = 1;
    if (flag == 1) {
      field.classList.remove("error");
      field.classList.remove("transparent");
      const ele = document.querySelector(`#${field.name.split(" ")[0]}`);
      if (ele) ele.remove();
    }
    if (field.value !== "" && field.name === "Email") {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!field.value.match(validRegex)) {
        field.classList.add("error");
        field.classList.add("errcolor");
        var element = document.querySelector("h5");
        if (typeof element === "undefined" || element === null) {
          const msg = document.createElement("h5");
          msg.innerHTML = `<h5 class="errmsg">Looks like this is not an email</h5>`;
          field.insertAdjacentHTML("afterend", msg.innerHTML);
        }
      } else {
        field.classList.remove("error");
        field.classList.remove("errcolor");
        var element = document.querySelector("h5");
        if (element) element.remove();
      }
    }
    if (field.value !== "" && field.name === "Password") {
      var regularExpression =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if (
        field.value.length < 8 ||
        field.value.length > 16 ||
        !regularExpression.test(field.value)
      ) {
        field.classList.add("error");
        var element = document.querySelector("h6");
        if (typeof element === "undefined" || element === null) {
          const msg = document.createElement("h6");
          msg.innerHTML = `<h6 class="errmsg errpwd">Password must contain at least 8 chars, one uppercase, lowercase char, digit and a special symobl</h6>`;
          field.insertAdjacentHTML("afterend", msg.innerHTML);
        }
      } else {
        field.classList.remove("error");
        var element = document.querySelector("h6");
        if (element) element.remove();
      }
    }
  });
}

btn.addEventListener("click", check);
