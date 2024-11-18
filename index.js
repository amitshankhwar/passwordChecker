const inputBox = document.getElementById("password");

inputBox.addEventListener("input", function () {
  const password = inputBox.value;

  // Check for uppercase letters
  const hasUpperCase = containsUpperCase(password);
  // Check for lowercase letters
  const hasLowerCase = containsLowerCase(password);
  // Check for numbers
  const hasNumber = containsNumber(password);
  // Check for special characters
  const hasSpecialChar = containsSpecialChar(password);

  const haslength = containsLength(password);

  // Update validation for each condition
  updateValidation("upperCase", hasUpperCase);
  updateValidation("lowerCase", hasLowerCase);
  updateValidation("number", hasNumber);
  updateValidation("specialChar", hasSpecialChar);
  updateValidation("length", haslength);
});

inputBox.addEventListener("focus", () => {
  document.querySelector(".check-results").style.display = "flex";
});

inputBox.addEventListener("blur", () => {
  document.querySelector(".check-results").style.display = "none";
});

// Function to check if string contains an uppercase letter
function containsUpperCase(str) {
  return str.split("").some((char) => char >= "A" && char <= "Z");
}

// Function to check if string contains a lowercase letter
function containsLowerCase(str) {
  return str.split("").some((char) => char >= "a" && char <= "z");
}

// Function to check if string contains a number
function containsNumber(str) {
  return str.split("").some((char) => char >= "0" && char <= "9");
}

// Function to check if string contains a special character
function containsSpecialChar(str) {
  const specialChars = '!@#$%^&*(),.?":{}|<>;';
  return str.split("").some((char) => specialChars.includes(char));
}

function containsLength(str) {
  return str.length >= 8;
}

// Function to update the validation status
function updateValidation(elementId, isValid) {
  const element = document.getElementById(elementId);
  const icon = element.querySelector("i");

  if (isValid) {
    element.classList.add("valid");
    element.classList.remove("invalid");
    icon.classList.remove("bi-shield-x");
    icon.classList.add("bi-shield-check");
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
    icon.classList.remove("bi-shield-check");
    icon.classList.add("bi-shield-x");
  }
}
