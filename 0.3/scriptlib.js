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

//Smart element selection method
_.g = function (ele) {
	if (ele !== undefined && ele !== "") {wkm = ele.split(":");} else {wkm = []}
	if (wkm.length > 1) {
		if (wkm[0] =="id") {
		}
	}
	else if (wkm.length == 1) {
		//Auto relist tags
	}
	else {
		console.error(_("msg.noEnoughArgs").replace("$1","_.g").replace("$2","1").replace("$3",":"));
		res = null;
	}
	return res;
}

//ScriptLib is loaded
console.log(_("msg.scriptlibLoaded").replace("$1",_("_ver")));