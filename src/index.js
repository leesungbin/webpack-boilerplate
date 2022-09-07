import "./style/main.scss";
function div() {
  const e = document.createElement("div");
  e.innerHTML = "hello world";
  return e;
}
document.body.appendChild(div());
