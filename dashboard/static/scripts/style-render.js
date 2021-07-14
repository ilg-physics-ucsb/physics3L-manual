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
  
    
}


function replace_tags() {
    var text = document.querySelectorAll('h1, h2, h3, #maincontent') 
    for (i = 0; i < text.length; i++) {
      emojified = text[i].innerHTML.replaceAll(/(\@)(.*?)(\@)/g, "<i class='fa $2'></i>")
      text[i].innerHTML = emojified
  
      fnoted = text[i].innerHTML.replaceAll(/\[fn\](.*?)\[\/fn\]/g, 
      `<span class= 'mytooltip' tabindex="0"><sup>]</sup>
      <span class ='tooltiptext'>$1</span></span>`)
      text[i].innerHTML = fnoted
  
      checked = text[i].innerHTML.replaceAll(/\[c\]/g, "<input type= 'checkbox'>")
      text[i].innerHTML = checked

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

      

  }
  



