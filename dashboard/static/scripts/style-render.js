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
    var text = document.querySelectorAll(' #maincontent >*:not(code):not(pre)')
    text.forEach( (t) => {
      console.log(t.tagName)
      emojified = t.innerHTML.replaceAll(/(\@)(.{2})(-)(.*?)(\@)/g, `<i class='$2 $2-$4'></i>`)
      t.innerHTML = emojified
  
      fnoted = t.innerHTML.replaceAll(/\[fn\](.*?)\[\/fn\]/g, 
      `<span class= 'mytooltip' tabindex="0"><sup>]</sup>
      </span><span class ='tooltiptext'>$1</span>`)
      t.innerHTML = fnoted
  
      checked = t.innerHTML.replaceAll(/\[c\]/g, "<input type= 'checkbox'>")
      t.innerHTML = checked
     
      popper=t.innerHTML.replaceAll(/(;;;)(.*?)(;;;)/g,` 
      <a tabindex="0" class=" text-primary p-0 m-0 align-top" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="$2" style='text-indent:0px;'><i class="bi bi-question-square-fill"></i></a>`)
      t.innerHTML = popper
      
      quick_math(t)
        
      
    })
    

    var links = document.querySelectorAll('#maincontent a')
    for (i = 0; i < links.length; i++) {
      if( links[i].innerHTML ==''){
      console.log(links[i])
      links[i].innerHTML ='Invalid Link'
      var link_id = links[i].getAttribute("href").replace('#','');

      let link_ref= document.getElementById(link_id)
  
      if(link_ref){
      links[i].innerHTML = `${link_ref.dataset.type} ${link_ref.dataset.kiwi}`}
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
  



function scrolltohash(){
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (window.location.hash && isChrome) {
            setTimeout(function () {
                var hash = window.location.hash;
                window.location.hash = "";
                window.location.hash = hash;
            }, 300);
          }
        }



function quick_math(t){
  renderMathInElement(t, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ]
  })
}