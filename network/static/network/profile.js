function follow(id){
  fetch(`${window.location.host}/follow/${id}`)
  .then(response=>response.json())
  .then(result=>{
    if (document.querySelector(`#follow-btn`).innerText=="Unfollow"){
      document.querySelector(`#follow-btn`).innerHTML="Follow";
    }
    else{
        document.querySelector(`#follow-btn`).innerHTML="Unfollow";
    }
    document.querySelector(`#follower`).innerHTML=result.followers;

  })
  .catch(error=>{
    alert("Something's wrong!");
  });
}
