var form = document.getElementById("formId");

function submitForm(event) {
  event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener("submit", submitForm);

const equals = () => {
  form.sign.value = "=";
  form.calculation.value == ""
    ? (form.ans.value = "0")
    : (form.ans.value = eval(form.calculation.value));
};
const CE = () => {
  form.calculation.value = form.calculation.value.substring(
    0,
    form.calculation.value.length - 1
  );
  form.calculation.value == "" ? (form.ans.value = "0") : "";
};

const C = () => {
  form.calculation.value = "";
  form.sign.value = "";
  form.ans.value = "0";
};

const modulus = () => {
  form.calculation.value[form.calculation.value.length - 1] == "%"
    ? form.calculation.value
    : (form.calculation.value += "%"),
    (form.sign.value = "%");
};
const divide = () => {
  form.calculation.value[form.calculation.value.length - 1] == "/"
    ? form.calculation.value
    : (form.calculation.value += "/");
  form.sign.value = "/";
};
const times = () => {
  form.calculation.value[form.calculation.value.length - 1] == "*"
    ? form.calculation.value
    : (form.calculation.value += "*");
  form.sign.value = "*";
};

const minus = () => {
  form.calculation.value[form.calculation.value.length - 1] == "-"
    ? form.calculation.value
    : (form.calculation.value += "-");
  form.sign.value = "-";
};

const plus = () => {
  (form.sign.value = "+"),
    form.calculation.value[form.calculation.value.length - 1] == "+"
      ? form.calculation.value
      : (form.calculation.value += "+");
};

const dout = () => {
  form.calculation.value[form.calculation.value.length - 1] == "."
    ? form.calculation.value
    : (form.calculation.value += ".");
};
const plusminus = () => {
  form.calculation.value += "+";
};
const one = () => {
  form.calculation.value += "1";
};
const two = () => {
  form.calculation.value += "2";
};
const three = () => {
  form.calculation.value += "3";
};
const four = () => {
  form.calculation.value += "4";
};
const five = () => {
  form.calculation.value += "5";
};
const six = () => {
  form.calculation.value += "6";
};
const seven = () => {
  form.calculation.value += "7";
};
const eight = () => {
  form.calculation.value += "8";
};
const nine = () => {
  form.calculation.value += "9";
};
const zero = () => {
  form.calculation.value += "0";
};

/*var form = document.getElementById("formId");
function submitForm(event){
    event.preventDefault();
}
form.addEventListener("submit", submitForm);*/