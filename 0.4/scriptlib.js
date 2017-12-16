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
_.topVar = [["_ver","0.4"]];
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
_.set("msg.notSupported","This feature is not supported, but it should be supported in the future.");
_.set("msg.notSupportedInBrowser","This feature is not supported in your current browser. Please update your browser.");
_.set("msg.loadedContent","Loaded content type $1 from source [$2].");
_.set("msg.typeNotSupported","Content with type $1 isn't supported.")
_.set("msg.mwIsValid","Testing if it is a MediaWiki site...");
_.set("msg.mwIsNotValid","MediaWiki is not included in this site.");
_.set("msg.mwIsConstr","Hooking with MediaWiki...");
_.set("msg.mwIsBuilt","Hooked with MediaWiki.");
_.set("msg.evalFailed","Cannot evaluate this string since it cannot be parsed.");
_.set("msg.notRightType","Argument list is mixed with not the right type of value in argument $1. You should use type [$2].");
_.set("msg.sameArgs","There are 2 or more arguments assigned with the same value which could cause failure.");

//List of HTML Tags
_.set("htmlTag","a,abbr,acronym,address,applet,area,article,aside,audio,b,base,basefont,bdi,bdo,big,blockquote,body,br,button,canvas,caption,center,cite,code,col,colgroup,command,datalist,dd,del,details,dfn,dialog,dir,div,dl,dt,em,embed,fieldset,figcaption,figure,font,footer,form,frame,frameset,h1> - <h6,head,header,hr,html,i,iframe,img,input,ins,kbd,keygen,label,legend,li,link,main,map,mark,menu,menuitem,meta,meter,nav,noframes,noscript,object,ol,optgroup,option,output,p,param,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,small,source,span,strike,strong,style,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,time,title,tr,track,tt,u,ul,var,video,wbr,id,class,tag,name,sall,all".split(","));

//Quick string methods
_.s = function () {
	console.error(_("msg.notAFunction").replace("$1","_.q"));
}
_.s.rplAll = function (str, ins, res) {
	string = str;
	if (ins !== res) {
		while (str.search(ins) !== -1) {
			string = string.replace(ins, res);
		}
		return string;
	}
	else {
		return null;
		console.error(_("msg.sameArgs"));
	}
}

//Console feedback formatting
_.cf = function (type, text, fmt) {
	donum = 0;
	rst = text;
	while (donum < fmt.length) {
		rst = rst.replace("$" + (fmt.length - donum).toString(), fmt[fmt.length - 1 - donum]);
		// console.log(fmt.length - donum);
		// console.log(fmt[fmt.length - 1 - donum]);
		donum ++;
	}
	if (type == 1) {
		console.warn(rst);
	}
	else if (type == 2) {
		console.error(rst);
	}
	else {
		console.log(rst);
	}
	return rst;
}

//Ajax methods
_.a = function () {
	_.cf(2, _("msg.notAFunction"), ["_.a"]);
}

//Algorithms
_.c = function () {
	_.cf(2, _("msg.notAFunction"), ["_.c"]);
}

//Media methods
_.m = function () {
	_.cf(2, _("msg.notAFunction"), ["_.m"]);
}

//Test methods
_.is = function () {
	_.cf(2, _("msg.notAFunction"), ["_.is"]);
}
_.is.null = function (test) {
	if (test == undefined || test == null) {
		rst = true;
	}
	else {
		rst = false;
	}
	return rst;
}

//loaders
_.l = function (type, src) {
	if (_.is.null(type)) {
		type = "js";
	}
	if (type == "js") {
		t = document.createElement("script");
		t.src = src;
		document.head.appendChild(t);
		console.warn(_("msg.loadedContent"));
	}
	else if (type == "css") {
		t = document.createElement("style");
		t.src = src;
		document.head.appendChild(t);
		console.warn(_("msg.loadedContent"));
	}
	else {
		console.error(_("msg.typeNotSupported").replace("$1",type));
	}
};

//Encryptions
_.e = function () {
	_.cf(2, _("msg.notAFunction"), ["_.e"]);
}

//Digits
_.h = function () {
	_.cf(2, _("msg.notAFunction"), ["_.h"]);
}

//Evaluate
_.j = function (txt) {
	stat = 0;
	try {
		eval();
	}
	catch (err) {
		stat = 1;
		console.error(_("msg.notSupportedInBrowser"));
	}
	if (stat == 0) {
		try {
			rst = eval("(" + txt + ")");
		}
		catch (err) {
			stat = 2;
			console.error(_("msg.evalFailed"));
			console.log(err.stack);
		}
	}
	if (stat == 0) {
		return rst;
	}
	else {
		return null;
	}
}

//Window methods
_.tab = window;
_.tab.reload = function () {
	_.cf(0, _("msg.tabIsReloaded"), [_.tab.source()]);
	window.location.href = window.location.href;
}
_.tab.size = function () {
	original = [document.body.style.width , document.body.style.height , document.body.style.position]
	document.body.style.width = "100%";
	document.body.style.height = "100%";
	document.body.style.position = "fixed";
	rst = [document.body.clientWidth, document.body.clientHeight];
	document.body.style.width = original[0];
	document.body.style.height = original[1];
	document.body.style.position = original[2];
	return rst;
}
_.tab.source = function () {
	if (window.location.protocol == "file:") {
		rst = window.location.href;
	}
	else if (window.location.port == "") {
		rst = window.location.protocol + "//" + window.location.host + "/";
	}
	else {
		rst = window.location.protocol + "//" + window.location.host + ":" + window.location.port + "/";
	}
}
_.tab.fullsc = function (element) {
	if (!(_.is.null(element))) {
		if (!(_.is.null(element.nodeName))) {
			if (element.requestFullScreen) {
				element.requestFullScreen();
			}
			else if (element.webkitRequestFullScreen) {
				element.webkitRequestFullScreen();
			}
			else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			}
			else {
				console.error(_("msg.notSupportedInBrowser"));
			}
		}
		
	}
	else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
		else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		}
		else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
}

//Quick methods that has not gotten into categories.
_.q = function () {
	console.error(_("msg.notAFunction").replace("$1","_.q"));
}

//Quick array methods
_.a = function () {
	console.error(_("msg.notAFunction").replace("$1","_.a"));
};
_.a.stack = function (ele) {
	if (ele == undefined || ele == null) {
		console.error(_("msg.noEnoughArgs").replace("$1","_.array.stack").replace("$2",0));
	}
	else {
		donum = 0;
		rst = [];
		while (donum < ele.length) {
			rst[donum] = ele[donum];
			donum ++;
		}
		return rst;
	}
}
_.a.combine = function (ele) {
	if (ele == undefined || ele == null) {
		console.error(_("msg.noEnoughArgs").replace("$1","_.array.combine").replace("$2",0));
	}
	else {
		donum = 0;
		rst = [];
		while (donum < ele.length) {
			donuma = 0;
			while (donuma < ele[donum].length) {
				if (ele[donum][donuma] !== null && ele[donum][donuma] !== undefined) {
					rst[rst.length] = ele[donum][donuma];
				}
				donuma ++;
			}
			donum ++;
		}
		return rst;
	}
}

//Smart element selection method
_.g = function (ele, src) {
	res = null;
	if (src == undefined | src == null) {
		src = document;
	}
	if (ele.search(":") !== -1) {
		if (ele.search("id:") !== -1) {
			res = src.getElementById(ele.replace("id:",""));
		}
		else if (ele.search("class:") !== -1) {
			res = _.a.stack(src.getElementsByClassName(ele.replace("class:","")));
		}
		else if (ele.search("name:") !== -1) {
			res = _.a.stack(src.getElementsByName(ele.replace("name:","")));
		}
		else if (ele.search("tag:") !== -1) {
			res = _.a.stack(src.getElementsByTagName(ele.replace("tag:","")));
		}
		else if (ele.search("sall:") !== -1) {
			res = _.a.combine([_.g("class:" + ele.replace("sall:",""), src) , _.g("name:" + ele.replace("sall:",""), src) , _.g("tag:" + ele.replace("sall:",""), src) , [_.g("id:" + ele.replace("sall:",""), src)] ]);
		}
	}
	else {
		console.error(_("msg.noModeSelector").replace("$1","_,g").replace("$2",ele));
	}
	return res;
}

//MediaWiki Support
console.log(_("msg.mwIsValid"));
_.mw = null;
try {
	_.mw = mw;
}
catch (err) {
	if (!(_.is.null(err))) {
		console.warn(_("msg.mwIsNotValid"));
	}
}
if (!(_.is.null(_.mw))) {
	console.log(_("msg.mwIsConstr"));
	_.mw = {};
	_.mw.getNameSpace = function () {
		console.log(_("notSupported"));
	}
	console.log(_("msg.mwIsBuilt"));
}

//ScriptLib is loaded
console.log(_("msg.scriptlibLoaded").replace("$1",_("_ver")));

try {
	_main();
}
catch (err) {
}
