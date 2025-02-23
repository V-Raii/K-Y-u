function transferText() {
    var inputValue = document.getElementById("inputText").value;
    var outputElements = document.querySelectorAll("#outputText");
    outputElements.forEach(function(element) {
        element.textContent = inputValue;
    });
    document.querySelector(".thiep").classList.remove("hide");
    document.querySelector(".card").classList.add("hide");
}

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll(".list > div");
    const totalItems = items.length;
    const slider = document.querySelector(".list");

    function showSlide(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        if (currentIndex < totalItems - 1) {
            slider.classList.add("turning");
            setTimeout(() => {
                currentIndex++;
                showSlide(currentIndex);
                slider.classList.remove("turning");
            }, 500);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            slider.classList.add("turning");
            setTimeout(() => {
                currentIndex--;
                showSlide(currentIndex);
                slider.classList.remove("turning");
            }, 500);
        }
    }

    showSlide(currentIndex); // Hiển thị slide đầu tiên

    // Gán sự kiện click cho các nút điều hướng trong HTML
    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("prev").addEventListener("click", prevSlide);
});

    document.addEventListener("click", function() {
        document.getElementById("background-music").play();
    }, { once: true }); // Chỉ kích hoạt một lần
