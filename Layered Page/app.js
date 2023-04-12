function generateLink() {
    const option = document.getElementById("option").value;
    const option1 = document.getElementById("option1").value;
    const option2 = document.getElementById("option2").value;
    const option3 = document.getElementById("option3").value;

    if (option && option1 && option2 && option3) {
        const link = `../Blogs/index.html#${option}+${option1}+${option2}+${option3}`;
        document.getElementById("result").innerHTML = `<a href="${link} "  class="result1">Click Me</a>`;
    } else {
        alert("Please Select All Options")
        // document.getElementById("result").innerHTML = "Please select all options.";
    }
}