const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");

const isPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const stripInput = (str) => {
  str = str.toLowerCase();
  const pattern = /[^a-z0-9]/g;
  return str.replace(pattern, "");
};

const handleButton = (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Please input a value");
    return;
  }
  let userInput = stripInput(input.value);
  let resultText = isPalindrome(userInput)
    ? `is a palindrome`
    : `is not a palindrome`;

  result.innerHTML = `
    <span>${input.value}</span> ${resultText}
  `;
};

checkBtn.addEventListener("click", handleButton);