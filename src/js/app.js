export function doPopup() {
  const popup = document.getElementsByClassName("popup");
  if (popup[0].classList.contains("show")) popup[0].classList.remove("show");
  else popup[0].classList.add("show");
}


