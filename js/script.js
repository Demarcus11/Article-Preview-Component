const shareBox = document.querySelector(".share-box"),
  shareBtn = document.querySelector(".share"),
  shareIcon = document.getElementById("share-icon");

// EV for share button
shareBtn.addEventListener("click", () => {
  shareBox.classList.toggle("hidden");

  if (shareBox.classList.contains("hidden")) {
    // Regular styles
    shareIcon.classList.remove("fill-100");
    shareBtn.classList.remove("bg-700");
    shareBtn.classList.remove("bg-400");

    shareIcon.classList.add("fill-200");
    shareBtn.classList.add("bg-200");
  } else {
    // Clicked styles
    shareIcon.classList.remove("fill-200");
    shareBtn.classList.remove("bg-200");
    if (window.innerWidth <= 700) {
      shareIcon.classList.add("fill-100");
      shareBtn.classList.add("bg-400");
    } else {
      shareIcon.classList.add("fill-100");
      shareBtn.classList.add("bg-700");
    }
  }
});
