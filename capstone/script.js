function isAgeValid(dob) {
    const dobDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      return age - 1;
    }
    return age;
  }
  
  // Example usage:
  const dob = document.getElementById('dob').value;
  const age = isAgeValid(dob);
  if (age < 18 || age > 55) {
    alert("Age must be between 18 and 55.");
    return;
  }
  let userForm=document.getElementById("user-form");

  let userentries =[];
  const saveUserForm = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;

    const acceptedTermsAndconditions=document.getElementById("acceptTerms").ariaChecked;
  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTermsAndconditions
  }   ;
  userentries.push(entry);
  localStorage.setItem("user-entries", JSON.stringify(userEntries))
}
  userForm.addEventListener("submit",saveUserForm);