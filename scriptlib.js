var para=document.createElement("script");
try {
 _g = _ver;
}
catch (err) {
 _ver = "newest";
}
try {
 _g = _min;
}
catch (err) {
 _min = true;
}
if (_ver == "newest") {
 para.src="https://mwashfds.github.io/elsl/0.4/scriptlib.js";
 console.log("Fetching newest version of ScriptLib...");
}
else {
 para.src="https://mwashfds.github.io/elsl/" + _ver + "/scriptlib.js";
 console.log("Fetching ScriptLib of version " + _ver + " ...");
}
if (para.src !== null) {
 document.head.appendChild(para);
}

css = document.createElement("link");
css.rel = "stylesheet";
css.type = "text/css";
if (_min == true) {
 css.href = "https://mwashfds.github.io/elsl/dlib/elsl.min.css";
 console.log("ELSL minimized CSS file was requested.");
} else if (_min == false) {
 css.href = "https://mwashfds.github.io/elsl/dlib/elsl.css";
 console.log("ELSL CSS file was requested.");
}
document.head.appendChild(css);
