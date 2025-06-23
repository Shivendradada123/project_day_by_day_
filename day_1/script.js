function sendOTP() {
  const phone = document.getElementById("phone").value.trim();
  const msg = document.getElementById("msg");

  if (phone === "" || phone.length !== 10 || isNaN(phone)) {
    alert("📵 Please enter a valid 10-digit phone number!");
    msg.style.color = "red";
    msg.innerText = "❌ Invalid phone number.";
    return;
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("🔐 OTP sent:", generatedOTP); // Simulate OTP

  msg.style.color = "green";
  msg.innerText = "✅ OTP sent successfully!";
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}
const data = {
  name: "Shivendra",
  phonenumber: 6261647208,
};

localStorage.setItem("userData", JSON.stringify(data));

function verifyOTP() {
  
  window.location.href = "profile.html"; 
}


