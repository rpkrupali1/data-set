var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  var data_num = element.getAttribute("data-number");
  console.log(data_num);
  var displayElement = document.querySelector("div[data-number='"+ data_num +"']");
  console.log(displayElement);
  displayElement.textContent = data_num;
});
