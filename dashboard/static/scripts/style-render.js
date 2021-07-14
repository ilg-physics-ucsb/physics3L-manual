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

  
    
}


function replace_tags() {
    var text = document.querySelectorAll('h1, h2, h3') 
    for (i = 0; i < text.length; i++) {
      emojified = text[i].innerHTML.replaceAll(/(\@)(.*?)(\@)/g, "<i class='fa $2'></i>")
      text[i].innerHTML = emojified
  
      fnoted = text[i].innerHTML.replaceAll(/\[fn\](.*?)\[\/fn\]/g, "<span class= 'tooltip'><sup>]</sup><span class ='tooltiptext'>$1</span></span>")
      text[i].innerHTML = fnoted
  
      checked = text[i].innerHTML.replaceAll(/\[c\]/g, "<input type= 'checkbox'>")
      text[i].innerHTML = checked
    }

      

  }
  



