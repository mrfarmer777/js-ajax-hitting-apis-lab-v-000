function getRepositories(){
  const username=document.getElementsByName("username")[0].value;
  const req=new XMLHttpRequest();
  req.addEventListener("load",showRepositories);
  req.open("GET","https://api.github.com/users/"+username+"/repos");
  req.send();
}

function showRepositories(){
  let dest=document.getElementById("repositories");
  const repos=JSON.parse(this.responseText);
  console.log(repos.length);
  const output=`<ul>${repos.map(r=>"<li>"+r.name+" - <a href='#' data-repo='"+r.full_name+"' onclick='getCommits(this)'>Get Commits</a></li>").join("")}</ul>`;
  dest.innerHTML=output;
}

function getCommits(el){
  const repoName=el.dataset.repo;
  const req=new XMLHttpRequest();
  req.addEventListener("load",displayCommits);
  req.open("GET","https://api.github.com/repos/"+repoName+"/commits");
  req.send();
}

function displayCommits(){
  let dest=document.getElementById('details');
  const commits=JSON.parse(this.responseText);
  console.log(commits);
  const output=`<ul>${commits.map(c=>"<li>"+c.author.login+", "+c.author.name" - <a href='#' data-author='"+c.message+"' onclick='getCommits(this)'>Get Commits</a></li>").join("")}</ul>`;
  
  dest.innerHTML=output;
}


