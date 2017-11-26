var para=document.createElement("script");
try {
 _g = _ver;
}
catch (err) {
 _ver = "newest";
}
if (_ver == "newest") {
 para.src="https://mwashfds.github.io/ScriptLib/0.4/scriptlib.js";
 console.log("Fetching newest version of ScriptLib...");
}
else {
 para.src="https://mwashfds.github.io/ScriptLib/" + _ver + "/scriptlib.js";
 console.log("Fetching ScriptLib of version " + _ver + " ...");
}
if (para.src !== null) {
 document.head.appendChild(para);
}
