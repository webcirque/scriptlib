//The basic variable IO function.
function _(name) {
	donum = 0;
	res = null;
	while (donum < _.topVar.length) {
		if (_.topVar[donum][0] == name) {
			res = _.topVar[donum][1];
		}
		donum ++;
	}
	if (res == null) {
		console.error("No variable is named $1.".replace("$1",name));
	}
	donum = null;
	return(res);
}
_.topVar = [["_ver","0.3"]];
_.set = function (name, content) {
	if (content !== undefined) {
		donum = 0;
		res = null;
		while (donum < _.topVar.length) {
			if (_.topVar[donum][0] == name) {
				res = _.topVar[donum][1];
				ki = donum;
			}
			donum ++;
		}
		if (res == null && (content !== undefined && content !== null)) {
			_.topVar[_.topVar.length] = [name,content];
			console.log("Created variable named [$1] under index [$2].".replace("$1", name).replace("$2", _.topVar.length-1));
		}
		else {
			if (content !== null) {
				_.topVar[ki][1] = content;
				console.log("Rewrited variable named [$1] under index [$2].".replace("$1", name).replace("$2", ki));
			}
			else if (res !== null) {
				donum = 0;
				relist = [];
				while (donum < _.topVar.length) {
					if (donum !== ki) {
						relist[relist.length] = _.topVar[donum];
						console.log("Removed variable named [$1] under index [$2].".replace("$1", name).replace("$2", ki));
					}
					donum++;
				}
				_.topVar = relist;
			}
			else {
				console.error("Cannot create a null variable.");
			}
		}
		ki = null
		donum = null;
		res = null;
	}
}

//Translation Area
_.set("msg.notAFunction","$1 is not a function.");
_.set("msg.tabIsReloaded","Current tab [$1] has been refreshed.");
_.set("msg.noEnoughArgs","Argument was not presented enough in function $1() . You should present at least $2 argument(s).");
_.set("msg.noSeptArgs","Argument was not seperated enough in function $1() . You should present at least $2 argument(s) with character [$3].");
_.set("msg.tooManyArgs","Argument was presented more than required in function $1() . You should just present $2 argument(s).");
_.set("msg.scriptlibLoaded","ScriptLib is initialized in version $1 .");
_.set("msg.noModeSelector","No mode selector in function $1($2). You should add a mode instructor.");
_.set("msg.notSupported","This feature is not supported.");

//Default variables
if (window.location.protocol == "file:" | window.location.protocol == "ftp:" | window.location.protocol == "ftps:" | window.location.protocol == "sftp:") {
	_.set("var.pathname",window.location.href);
}
else if (window.location.port == "") {
	_.set("var.pathname",window.location.protocol + "//" + window.location.host + "/");
}
else {
	_.set("var.pathname",window.location.protocol + "//" + window.location.host + ":" + window.location.port + "/");
}

//Window methods
_.tab = function () {
	console.error(_("msg.notAFunction").replace("$1","_.tab"));
}
_.tab.reload = function () {
	console.log(_("msg.tabIsReloaded").replace("$1", _("var.pathname")));
	window.location.href = window.location.href;
}

//Quick method
_.q = function () {
	console.error(_("msg.notAFunction").replace("$1","_.q"));
}
_.q.replaceAll = function (str, ins, res) {
	string = str;
	while (string.search(ins) !== -1) {
		string = string.replace(ins, res);
	}
	return string;
}
_.q.stackAllElement = function () {
}

//Smart element selection method
_.g = function (ele, src) {
	res = null;
	if (src == undefined | src == null) {
		src = document;
	}
	if (ele.search("id:") !== -1) {
		res = src.getElementById(ele.replace("id:",""));
	}
	else if (ele.search("class:") !== -1) {
		res = src.getElementsByClassName(ele.replace("class:",""));
	}
	else if (ele.search("name:") !== -1) {
		res = src.getElementsByName(ele.replace("name:",""));
	}
	else if (ele.search("tag:") !== -1) {
		res = src.getElementsByTagName(ele.replace("tag:",""));
	}
	else if (ele.search("all:") !== -1) {
		console.error(_("msg.notSupported"));
	}
	else {
		console.error(_("msg.noModeSelector").replace("$1","_,g").replace("$2",ele);
	}
	return res;
}

//ScriptLib is loaded
console.log(_("msg.scriptlibLoaded").replace("$1",_("_ver")));
