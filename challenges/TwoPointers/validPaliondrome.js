const isPalindrome = (s) => {
  const str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  return str.split("").reverse("").join("") === str.split("").join("");
};
