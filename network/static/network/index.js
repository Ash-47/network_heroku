function like(id){
  fetch(`${window.location.protocol}//${window.location.host}/like/${id}`)
  .then(response=>response.json())
  .then(result=>{

    if (result.likes<0);
    else{
      const ref=document.querySelector(`#anch${id}`);
      if (ref.innerText=="Like") ref.innerHTML="Unlike";
      else ref.innerHTML="Like";

      document.querySelector(`#pnum${id}`).innerHTML=result.likes;
  }
  })
  .catch(error=>{
    alert("Login required");
  });
}

function edit(id){
   const parent=document.querySelector(`#edit${id}`);
   document.querySelector(`#content${id}`).style.display = "none";
   var div=document.createElement("div");
  div.innerHTML=`<form>
  <div class="form-group">

    <textarea class="mt-2 form-control" id="add-text" rows="3" required name="content">${document.querySelector(`#content${id}`).innerHTML}</textarea>
  </div>
  <div class="mt-2 d-flex justify-content-end">
    <button type="submit" id="add-btn" class="btn btn-primary">Save</button>
  </div>
</form>`;
  parent.appendChild(div);
  document.querySelector('#add-btn').addEventListener("click",(event)=>{
    event.preventDefault();
    fetch(`${window.location.protocol}//${window.location.host}/edit/${id}`,{
    method: "POST",
    body: JSON.stringify({content: document.querySelector("#add-text").value})})
      .then(response=>response.json())
      .then(result=>{
        div.style.display="none";
        document.querySelector(`#content${id}`).innerHTML=result.updated_post;
        document.querySelector(`#content${id}`).style.display="block";
      })
      .catch(error=>{
        console.log(error);
      });
  });
}
