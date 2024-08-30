let length = 6;
let otp;  

// generating random otp of 6 digits
function generateOTP(length) {
    let otp = "";
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10).toString();  
    }
    return otp;
}

// generate otp button
let btn = document.querySelector(".OTP");
btn.addEventListener("click", function() {
    otp = generateOTP(length);  
    alert(otp);
});

//submit button functionality
let submitBTN = document.querySelector(".submit");
submitBTN.addEventListener("click", function() {
    let enteredOTP = document.querySelector(".EnteredOTP").value;  
    if (enteredOTP === otp) {  // Compare entered OTP with generated OTP
        alert("OTP Submitted");
    } else {
        alert("Incorrect OTP, Please try again.");
    }
});


//Login Button
let loginBTN = document.querySelector(".login");
loginBTN.addEventListener("click", function() {
    let enteredOTP = document.querySelector(".EnteredOTP").value;  // Get the value entered by the user
    if (enteredOTP === otp) {  // Check if the entered OTP matches the generated OTP
        alert("Logged in successfully");
    } else {
        alert("Incorrect OTP, please enter the correct OTP before logging in.");
    }
});


// Try Another Button
let tryAnotherBTN = document.querySelector(".try-another");
tryAnotherBTN.addEventListener("click", function() {
    document.querySelector(".EnteredOTP").value = ""; // clear input field
    
    // clear otp field
    otp = null;

    document.querySelector(".username").value = "";
    document.querySelector(".password").value = "";

    alert("Please try another way");
});