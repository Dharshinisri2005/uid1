function verifyOTP() {
	const enteredOTP = document.getElementById("otp").value;
	const userEnteredOTP = document.getElementById("otp-input").value;
  
	if (enteredOTP === userEnteredOTP) {
	  document.getElementById("otp-status").textContent = "OTP Verified";
	} else {
	  document.getElementById("otp-status").textContent = "Invalid OTP";
	}
  }
  let captcha;

function generate() {
  // Clear old input
  document.getElementById("submit").value = "";

  // Access the element to store the generated captcha
  captcha = document.getElementById("image");
  let uniquechar = "";

  const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Generate captcha for a length of 5 with random characters
  for (let i = 0; i < 5; i++) { // Change the loop starting index to 0
    uniquechar += randomchar.charAt(Math.floor(Math.random() * randomchar.length)); // Use Math.floor to round down
  }

  // Store the generated input
  captcha.textContent = uniquechar;
}

function printmsg() {
  const usr_input = document.getElementById("submit").value;

  // Check whether the input is equal to the generated captcha or not
  if (usr_input === captcha.textContent) { // Use "===" for strict equality
    document.getElementById("key").textContent = "Matched";
    generate();
  } else {
    document.getElementById("key").textContent = "Not Matched";
    generate();
  }
}

// Initial captcha generation on page load
generate();

