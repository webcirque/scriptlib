window.addEventListener("load",function(){let t_delete=function(origin,index){let result="";for(let donum=0;donum<origin.length;donum++){if(donum!=index){result+=origin[donum];}}
return(result);}
let t_rplAll=function(or,rp,ds){let tmp=or;while(tmp.search(rp)!=-1){tmp=tmp.replace(rp,ds);}
return tmp;}
let notes=document.getElementsByClassName("note");for(let donum=0;donum<notes.length;donum++){list=notes[donum].innerHTML;list=t_rplAll(t_rplAll(t_rplAll(list,"  "," "),"\n \n","\n\n"),"\n\n","\n");;if(list[0]=="\n"){list=t_delete(list,0);}
if(list[list.length-1]=="\n"){list=t_delete(list,list.length-1);}
list=t_rplAll(list,"~&lt;","<");list=t_rplAll(list,"~&gt;",">");list=list.split("\n");notes[donum].innerHTML="";for(let dinum=0;dinum<list.length;dinum++){if(list[dinum].search("t1:")==0){notes[donum].innerHTML+="<div class=\"t1\">"+list[dinum].replace("t1:","")+"</div>";}else if(list[dinum].search("t2:")==0){notes[donum].innerHTML+="<div class=\"t2\">"+list[dinum].replace("t2:","")+"</div>";}else if(list[dinum].search("t3:")==0){notes[donum].innerHTML+="<div class=\"t3\">"+list[dinum].replace("t3:","")+"</div>";}else{notes[donum].innerHTML+="<div>"+list[dinum]+"</div>";}}}
notes=null;t_delete=null
t_rplAll=null
console.log("Module ELSL Notes loaded.");});
