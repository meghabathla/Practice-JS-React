const lists = document.querySelectorAll(".question");

lists.forEach((list) => {
  const icon = list.querySelector(".icon");
  const answer = list.nextElementSibling;
  list.addEventListener("click", () => {
    icon.classList.toggle("active");
    answer.classList.toggle("active");
  });
});
