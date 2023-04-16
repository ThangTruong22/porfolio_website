// const sta_experience = document.querySelector(".sta-experience");

// function toggle_experience() {
//   const sta_experience = document.getElementsByClassName("sta-experience");
//   console.log(sta_experience);
//   sta_experience.style.display = "none";
//   // sta_experience.classList.toggle(".sta-experience");
//   // sta_experience.style.display = "flex";
// }

function change_opacity(id_name) {
  var x = document.getElementById(id_name);
  if (x.style.opacity === "1") {
    x.style.opacity = "0";
    x.style.height = "0";
    x.style.overflow = "hidden";
  } else {
    x.style.opacity = "1";
    x.style.height = "auto";
  }
}

document.getElementById("sta-experience-button").onclick = function () {
  change_opacity("sta-experience");
};

document.getElementById("vietalk-experience-button").onclick = function () {
  change_opacity("vietalk-experience");
};

document.getElementById("get-done-task-button").onclick = function () {
  change_opacity("personal-project-section-outside");
};
