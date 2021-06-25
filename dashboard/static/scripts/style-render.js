function processstyles(){  
  tableOfContents('[data-toc]', '[data-content]')
    replace_tags()

}


function replace_tags() {
    var text = document.querySelectorAll('#maincontent h3, #maincontent h2, #maincontent p, #maincontent li, #maincontent ol, .Question ol li, #maincontent ul,  .Table td, nav') 
    for (i = 0; i < text.length; i++) {
      emojified = text[i].innerHTML.replaceAll(/(\@)(.*?)(\@)/g, "<i class='fa $2'></i>")
      text[i].innerHTML = emojified
  
      fnoted = text[i].innerHTML.replaceAll(/\[fn\](.*?)\[\/fn\]/g, "<span class= 'tooltip'><sup>]</sup><span class ='tooltiptext'>$1</span></span>")
      text[i].innerHTML = fnoted
  
      checked = text[i].innerHTML.replaceAll(/\[c\]/g, "<input type= 'checkbox'>")
      text[i].innerHTML = checked
    }
  }
  