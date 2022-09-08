let totalCredit = parseFloat(0);
let creditArr = [];
let GpaArr = [];
let average_GPA = parseFloat(0);
let C_GPA = parseFloat(0);
let btn = document.querySelector(".button_1");
let tBody = document.querySelector(".tableBody");

////Insert HTML

const genTemplate = () => {
  const html = `
      <tr>
            <td><i class="far fa-trash-alt delete"></i></td>
            <td ><input type="number" placeholder = "Credit Hours" class = "cHrs" required /></td>
            <td ><input type="number" placeholder = GPA class = "GPA"  required /></td>
      </tr>`;
  tBody.insertAdjacentHTML("beforeEnd", html);
};

//////Add button

btn.addEventListener("click", () => {
  genTemplate();
});

//////CALCULATE BUTTON

let btn_2 = document.querySelector(".button_2");

btn_2.addEventListener("click", () => {
  let creditHrs = document.querySelectorAll(".cHrs");
  creditHrs.forEach((credit_H, index) => {
    console.log(credit_H.value);
    totalCredit += parseFloat(credit_H.value);
    creditArr[index] = parseFloat(credit_H.value);
  });
  let GPA = document.querySelectorAll(".GPA");
  GPA.forEach((S_GPA, index) => {
    GpaArr[index] = parseFloat(S_GPA.value);
  });

  for (let index = 0; index < creditArr.length; index++) {
    average_GPA += parseFloat(creditArr[index]) * parseFloat(GpaArr[index]);
  }
  C_GPA = parseFloat(average_GPA / totalCredit);
  if (Number.isNaN(C_GPA)) {
    console.log(C_GPA);
    console.log(totalCredit);
    console.log(creditArr);
    console.log(average_GPA);
    C_GPA = 0;
    totalCredit = parseFloat(0);
    creditArr = [];
    GpaArr = [];
    average_GPA = parseFloat(0);
    C_GPA = parseFloat(0);
    alert("Please Dont Leave Empty Input Fields");
    return;
  }
  console.log(C_GPA.toFixed(2));
  let Div = document.querySelector(".container");
  Div.innerHTML = `<div class = 'afterDiv'><h2>CGPA = ${C_GPA.toFixed(
    2
  )}</h2></div>`;
});

/////Remove

tBody.addEventListener("click", (e) => {
  // console.log(e.target.parentElement.parentElement);
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
