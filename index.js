function getRepositories(){
  let username=document.getElementsByName("username")[0].value;
  const req=new XMLHttpRequest();
  req.addEventListener("load",showRepositories);
  req.open("GET","https://api.github.com/users/"+username+"/repos");
  req.send();
}

function showRespositories(){
  let dest=document.getElementById("repositories");
  const repos=JSON.parse(this.responseText);
  const output=`<ul>${dest.map(r=>"<li>"+r.name+" - <a href='#' data-repo='"+r.name+"' onclick='getCommits(this)>Get Commits</a><li>"}).join("")
  
}