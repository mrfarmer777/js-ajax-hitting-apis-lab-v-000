function getRepositories(){
  let username=document.getElementsByName("username")[0].value;
  const req=new XMLHttpRequest();
  req.addEventListener("load",showRepositories);
  req.open("GET","https://api.github.com/users/"+username+"/repos");
  req.send();
}

function showRepositories(){
  let dest=document.getElementById("repositories");
  const repos=JSON.parse(this.responseText);
  console.log(repos.length);
  const output=`<ul>${repos.map(r=>"<li>"+r.name+" - <a href='#' data-repo='"+r.name+"' onclick='getCommits(this)>Get Commits</a></li>").join("")}</ul>`;
  dest.innerHTML=output;
}