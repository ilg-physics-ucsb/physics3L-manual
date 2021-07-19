function processstyles(){
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ]
  })  
  modal_img()
  replace_tags()
  tableOfContents('[data-toc]', '[data-content]')
    
  table_list=document.querySelectorAll('.Table table')

  
  for (i = 0; i < table_list.length; i++) {
    table_list[i].setAttribute('class', 'table table-striped')
  }
  

 

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    console.log(popoverTriggerEl)
    return new bootstrap.Popover(popoverTriggerEl, {
      trigger: 'focus'
    }) })

    
  
    
}



function replace_tags() {
    var text = document.querySelectorAll('h1, h2, h3, #maincontent p, #maincontent span, #maincontent li, #maincontent') 
    for (i = 0; i < text.length; i++) {
      emojified = text[i].innerHTML.replaceAll(/(\@)(.*?)(\@)/g, "<i class='fa $2'></i>")
      text[i].innerHTML = emojified
  
      fnoted = text[i].innerHTML.replaceAll(/\[fn\](.*?)\[\/fn\]/g, 
      `<span class= 'mytooltip' tabindex="0"><sup>]</sup>
      <span class ='tooltiptext'>$1</span></span>`)
      text[i].innerHTML = fnoted
  
      checked = text[i].innerHTML.replaceAll(/\[c\]/g, "<input type= 'checkbox'>")
      text[i].innerHTML = checked
     
      popper=text[i].innerHTML.replaceAll(/(;;;)(.*?)(;;;)/g,` 
      <a tabindex="0" class=" text-primary p-0 m-0 align-top" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="$2" style='text-indent:0px;'><i class="bi bi-question-square-fill"></i></a>`)
      text[i].innerHTML = popper
      
      
    }
    

    var links = document.querySelectorAll('#maincontent a')
    for (i = 0; i < links.length; i++) {
      if( links[i].innerHTML ==''){
      console.log(links[i])
      var link_id = links[i].getAttribute("href").replace('#','');

      let link_ref= document.getElementById(link_id)
      links[i].innerHTML = `${link_ref.dataset.type} ${link_ref.dataset.kiwi}`
      }
    }

    var buts = document.getElementsByClassName('mats')
    for(i=0; i<buts.length;i++){
      buts[i].onclick= function(){
        this.classList.toggle('btn-UCSB-navy')
        this.classList.toggle('btn-UCSB-gold')
        this.querySelector('span').classList.remove('bg-danger')
        this.querySelector('span').classList.add('bg-secondary')
      }
    }

 
  }
  



