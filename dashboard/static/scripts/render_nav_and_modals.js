let sitedata

  ///Start by just printing out json file.
 function init_nav(linkfile) {
    console.log("init nav called")
    let lab_list=document.getElementById('lab_list')
    let TA_list=document.getElementById('TA_list')
    fetch("config.json")
        .then(response => {
            return response.json();
        })
        .then(data => stash(data));
    function stash(data){
      sitedata=data
      includeHTML(linkfile)

      console.log(sitedata)  
      for(i=0;i<sitedata['page-links'].length;i++){
        lab_list.innerHTML+=`<li><a class="dropdown-item" href="?linkfile=${sitedata['page-links'][i]["file"]}">${sitedata['page-links'][i]["name"]}</a></li>`

      }
      lab_list.innerHTML+= `<li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="?linkfile=home"><i class="bi bi-house-fill"></i> Home</a></li>`
      //TA List Stuff

      TA_list.innerHTML+= 

      `
      <li>
      <hr class="p-0 m-0" >
            </li>
      <li class="text-center lead bg-UCSB-navy text-white"> 
      <b>TAs</b> 
      </li> 
      <li ><hr class="p-0 m-0" ></li>`
      for(i=0;i<sitedata['TAs'].length;i++){
        var first_name=sitedata['TAs'][i]['first-name']
        var last_name=sitedata['TAs'][i]['last-name']
        var email= sitedata['TAs'][i]['email']
        var zoom= sitedata['TAs'][i]['zoom']
  
        TA_list.innerHTML+= `<li >
              <div class="dropdown-item text-center py-1">
                <div class="col-sm-12 nav-links lead">${first_name} ${last_name}</div>
                <div class="row bg-UCSB-lightgray p-1">
                <a href="mailto:${email}" class="col"><i class="bi bi-envelope-fill px-1"></i></a>
                <a href="${zoom}" class="col"><i class="bi bi-camera-video-fill px-1 py-0"></i></a>
                <button type="button" class="btn col px-1 py-0" data-bs-toggle="modal" data-bs-target="#infoModal" 
                data-name="${first_name +' '+ last_name}" 
                data-title="TA"
                data-email="${email}" 
                data-zoom="${zoom}" 
                data-oo="${sitedata['TAs'][i]['officehours']}" 
                data-so="${sitedata['TAs'][i]['sectionhours']}"
                data-img="${sitedata['TAs'][i]['img']}"
                data-pronouns="${sitedata['TAs'][i]['pronouns']}"
                ><i class="bi bi-info-circle text-primary"></i></button>
                </div>
              </div>
            </li>`

      }
      TA_list.innerHTML+= 
            `<li>
            <hr class="p-0 m-0" >
          </li>
            <li class="text-center lead bg-UCSB-navy text-UCSB-gold"> 
      <b>Instructors</b>
      </li> 
            <li>
            <hr class="p-0 m-0" >
            </li>`

      for(i=0;i<sitedata['Faculty'].length;i++){
        var first_name=sitedata['Faculty'][i]['first-name']
        var last_name=sitedata['Faculty'][i]['last-name']
        var title=sitedata['Faculty'][i]['title']
        var email= sitedata['Faculty'][i]['email']
        var zoom= sitedata['Faculty'][i]['zoom']
      
        TA_list.innerHTML+= `<li>
        <div class="dropdown-item text-center">
        <div class="col-sm-12 nav-links lead">${first_name} ${last_name}</div>
        <div class="row bg-UCSB-lightgray p-1">
        <a href="mailto:${email}" class="col"><i class="bi bi-envelope-fill px-1"></i></a>
        <a href="${zoom}" class="col"><i class="bi bi-camera-video-fill px-1 py-0"></i></a>
        <button type="button" class="btn col px-1 py-0" data-bs-toggle="modal" data-bs-target="#infoModal" 
                data-name="${first_name +' '+ last_name }" 
                data-title= "${title}"
                data-email="${email}" 
                data-zoom="${zoom}" 
                data-oo="${sitedata['Faculty'][i]['officehours']}" 
                data-so="${sitedata['Faculty'][i]['sectionhours']}"
                data-img="${sitedata['Faculty'][i]['img']}"
                data-pronouns="${sitedata['Faculty'][i]['pronouns']}"
                ><i class="bi bi-info-circle text-primary"></i></button>
              </div>
            </li>`

      }

           
   
    }

    

}



var infoModal = document.getElementById('infoModal')
infoModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-name')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = infoModal.querySelector('.modal-title')
  var modalBodyInput = infoModal.querySelector('.modal-body')

  modalTitle.innerHTML = `Contact <span class='text-UCSB-seagreen'>${recipient}</span>`

  modalBodyInput.innerHTML =''
  let color
  if (button.getAttribute('data-title')=="TA"){
    color="primary"
  }else{
    color="danger"
  }

  if(button.getAttribute('data-img')){
    modalBodyInput.innerHTML+= `
    <img src="${button.getAttribute('data-img')}" class="img-fluid rounded" style="max-height:200px;"></img>
    <br>
    <br>
    `
  }

  modalBodyInput.innerHTML+=
  `<strong>${recipient}</strong> 
  <span class="badge bg-${color}">${button.getAttribute('data-title')}</span>
  <br>
  <small class=text-muted>${button.getAttribute('data-pronouns')}</small>
  <hr>`

  if(button.getAttribute('data-email')){
    modalBodyInput.innerHTML+= `
  <b>Email:</b> <br>
  <a href="mailto:${button.getAttribute('data-email')}">${button.getAttribute('data-email')}</a>
  <hr>
  `}
  if(button.getAttribute('data-zoom')){
    modalBodyInput.innerHTML+= `
  <b>Zoom Room:</b> <br>
  <a href="mailto:${button.getAttribute('data-zoom')}"> Join Zoom Room </a>
  <hr>
  `}
  if(button.getAttribute('data-oo')){
    modalBodyInput.innerHTML+= `
  <b>Office Hours:</b><br> 
  ${button.getAttribute('data-oo')}
  <hr>
  `}

  if(button.getAttribute('data-so')){
    modalBodyInput.innerHTML+= `
  <b>Section Hours:</b> <br>
  ${button.getAttribute('data-so')}
  `
  }
})

var imgModal = document.getElementById('imgModal')
imgModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var image = event.relatedTarget
  // Extract info from data-bs-* attributes
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalBodyInput = imgModal.querySelector('.modal-body')


  modalBodyInput.innerHTML = `
  <img src="${image.getAttribute('src')}"  alt="${image.getAttribute('alt')} width="100%" style="max-width:100%"></img>
  <hr>

  ${image.getAttribute('title')}
  `
  
  
  
  
})


function modal_img(){
  imgs=document.querySelectorAll("img")
  var details
  for(i=0;i<imgs.length;i++){
    imgs[i].setAttribute('data-bs-toggle',"modal")
    imgs[i].setAttribute('data-bs-target',"#imgModal")
    if(imgs[i].getAttribute('title')){
    imgs[i].outerHTML+=imgs[i].getAttribute('title')}
    }



  }


  window.document.onload = function(e){ 
    console.log("document.onload", e, Date.now() ,window.tdiff,  
    (window.tdiff[0] = Date.now()) && window.tdiff.reduce(fred) ); 
}