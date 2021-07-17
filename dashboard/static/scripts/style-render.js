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
  
  tableOfContents('[data-toc]', '[data-content]')
    
  table_list=document.querySelectorAll('.Table table')

  
  for (i = 0; i < table_list.length; i++) {
    table_list[i].setAttribute('class', 'table table-striped')
  }
  replace_tags()

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl) })
  
    
}



function replace_tags() {
    var text = document.querySelectorAll('h1, h2, h3, #maincontent p, #maincontent span, #maincontent li') 
    for (i = 0; i < text.length; i++) {
      emojified = text[i].innerHTML.replaceAll(/(\@)(.*?)(\@)/g, "<i class='fa $2'></i>")
      text[i].innerHTML = emojified
  
      fnoted = text[i].innerHTML.replaceAll(/\[fn\](.*?)\[\/fn\]/g, 
      `<span class= 'mytooltip' tabindex="0"><sup>]</sup>
      <span class ='tooltiptext'>$1</span></span>`)
      text[i].innerHTML = fnoted
  
      checked = text[i].innerHTML.replaceAll(/\[c\]/g, "<input type= 'checkbox'>")
      text[i].innerHTML = checked
     
      popper=text[i].innerHTML.replaceAll(/(;;;)(.*?)(;;;)/g, `<button type="button" class="btn btn-sm btn-primary lead" data-bs-toggle="popover" title="" data-bs-content="$2" style='border-radius:15px; height:10px; overflow:visible;'><small>?</small></button>`)
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
  



