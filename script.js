document.addEventListener("DOMContentLoaded", function () {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");

    setInterval(function () {
        if (image1.style.display === "block") {
            image1.style.display = "none";
            image2.style.display = "block";
        } else {
            image1.style.display = "block";
            image2.style.display = "none";
        }
    }, 1000); // Change 2000 to the desired interval in milliseconds (e.g., 2000 for 2 seconds)
});
