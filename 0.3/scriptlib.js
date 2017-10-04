//The basic variable IO function.
function _(name) {
	donum = 0;
	res = null;
	while (donum < _.topVar.length) {
		if (_.topVar[donum][0] == name) {
			res = _.topVar[donum][1];
			if (name !== "msg.foundtv") {console.log(_("msg.foundtv").replace("$1",name).replace("$2",donum));}
		}
		donum ++;
	}
	if (res == null) {
		console.error(_("msg.novar").replace("$1",name));
	}
	donum = null;
	return res;
	res = null;
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
				console.log(_("msg.foundtv").replace("$1", name).replace("$2", donum));
			}
			donum ++;
		}
		if (res == null) {
			_.topVar[_.topVar.length] = [name,content];
			console.log("Created variable named [$1] under index [$2].".replace("$1", name).replace("$2", _.topVar.length-1));
		}
		else {
			if (content !== null) {
				_.topVar[ki][1] = content;
				console.log("Rewrited variable named [$1] under index [$2].".replace("$1", name).replace("$2", ki));
			}
			else {
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
		}
		ki = null
		donum = null;
		res = null;
	}
}

//Multi-language support
if (_lang == "en_US") {
	_.set("msg.foundtv","Found variable named [$1] under index [$2].");
	_.set("msg.novar","No variable is named $1.");
}
else if (_lang == "zh_CN") {
}

//Default variables

//Window methods
_.w = function () {
	console.error("$1 is not a function".replace("$1","_.w"));
}
_.w.refreshTab = function () {
	console.log("Current tab [$1] has been refreshed.".replace("$1", window.location.href));
	window.location.href = window.location.href;
}

//Smart element selection method
_.g = function (ele) {
	wkm = ele.split(":");
	if (wkm.length > 1) {
		if (wkm[0] =="id") {
		}
	}
	else if (wkm.length == 1) {
		//Auto relist tags
	}
	else {
		res = null;
		console.error("No argument was presented in function $1.".replace("$1","_.g()"))
	}
	return res;
}