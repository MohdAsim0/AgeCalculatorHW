const date = document.querySelector("input");
const btn = document.querySelector("#btn");
const display = document.querySelector(".show");

btn.addEventListener("click", displayDate);

function displayDate() {
  let birthday = date.value;
  // console.log(birthday);
  if (birthday === "") {
    alert("enter the date of birth ");
  }

  let result = getAge(birthday);
//   console.log(result);

if(isNaN(result.age) && isNaN(result.month) && isNaN(result.days)){
    display.children[0].children[0].innerText = "-";
    display.children[1].children[0].innerText ="-";
    display.children[2].children[0].innerText = "-";
   
}else{
    display.children[0].children[0].innerText = result.age;
    display.children[1].children[0].innerText = Math.abs(result.month);
    display.children[2].children[0].innerText = Math.abs(result.days);
}
}

function getAge(birthday) {
  let todayDate = new Date();
  let birthDay = new Date(birthday);

  let age = todayDate.getFullYear() - birthDay.getFullYear();
  let month = todayDate.getMonth() - birthDay.getMonth();
  let days = todayDate.getDate() - birthDay.getDate();

//   console.log(birthDay);
//   console.log(todayDate);


  if (birthDay > todayDate) {
    alert("please write valid DOB I am not Time machine");
    return;
  }

  if (age > 110) {
    alert(`please write valid DOB You might be dead !!`);
    return;
  }

  if (month < 0 || (month === 0 && todayDate.getDate() < birthDay.getDate())) {
    age--;
  }

  return { age, month, days };
}
