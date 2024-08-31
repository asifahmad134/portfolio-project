// Change the style of a photo when someone clicks on it.
let avatar = document.getElementById("avatar");
const changeImageSize = () => {
  avatar.style.width = "350px";
  avatar.style.height = "350px";
};
avatar.onclick = changeImageSize;
