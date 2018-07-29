function getRepositories(){
  let username=document.getElementsByName("username")[0].value;
  const req=new XMLHttpRequest();
  req.addEventListener("load",showRepositories);
  req.open("GET",)
}