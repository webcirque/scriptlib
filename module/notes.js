_.s.delete=function(origin,index){let result="";for(let donum=0;donum<origin.length;donum++){if(donum!=index){result+=origin[donum];}}
return(result);}
notes=_.g("class:note");for(let donum=0;donum<notes.length;donum++){list=notes[donum].innerHTML;list=_.s.rplAll(_.s.rplAll(_.s.rplAll(list,"  "," "),"\n \n","\n\n"),"\n\n","\n");;if(list[0]=="\n"){list=_.s.delete(list,0);}
if(list[list.length-1]=="\n"){list=_.s.delete(list,list.length-1);}
list=_.s.rplAll(list,"~&lt;~","<");list=_.s.rplAll(list,"~&gt;~",">");list=list.split("\n");notes[donum].innerHTML="";for(let dinum=0;dinum<list.length;dinum++){if(list[dinum].search("t1:")==0){notes[donum].innerHTML+="<div class=\"t1\">"+list[dinum].replace("t1:","")+"</div>";}else if(list[dinum].search("t2:")==0){notes[donum].innerHTML+="<div class=\"t2\">"+list[dinum].replace("t2:","")+"</div>";}else if(list[dinum].search("t3:")==0){notes[donum].innerHTML+="<div class=\"t3\">"+list[dinum].replace("t3:","")+"</div>";}
else{notes[donum].innerHTML+="<div>"+list[dinum]+"</div>";}}}
console.log("Module ELSL Notes loaded.");
