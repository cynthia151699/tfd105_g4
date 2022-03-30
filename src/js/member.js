emailjs.init("rB4cW-mtW8WwyODex");

const btn = document.getElementById("button");
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_c3rqluo";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert("Email format error, please re-enter");
      // alert(JSON.stringify(err));
    }
  );
});