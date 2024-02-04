<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Input Example</title>
</head>
<body>

    <label for="userInput">Enter something:</label>
    <input type="text" id="userInput">
    <button onclick="displayInput()">Submit</button>

    <script>
        function displayInput() {
            // Get the value from the input field
            var userInput = document.getElementById("userInput").value;

            // Display the user input
            console.log("You entered: " + userInput);
        }
    </script>

</body>
</html>