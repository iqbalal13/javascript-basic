function addInput() {
    var inputContainer = document.getElementById("inputContainer");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "input[]");
    inputContainer.appendChild(input);
  }