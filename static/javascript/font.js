//得到要添加的事件 兼容旧的安卓浏览器（旧的安卓使用resize事件）
var evt = "onorientationchange" in window ? "orientationchange" : "resize";
var doc = document.documentElement;
window.addEventListener(evt, _resize, false);
window.addEventListener("DOMContentLoaded", _resize);
function _resize() {
    doc.style.fontSize = 20 * (doc.clientWidth / 320) + "px";
}
