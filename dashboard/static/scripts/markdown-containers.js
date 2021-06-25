
//Class Groups
const pad_mar="  px-0 py-0 mx-5"
const group1=" col-sm-9 "


// CUSTOMS!


md.use(container, 'Materials', {
  render: function (tokens, idx) {
      return card(tokens, idx, /^Materials(.*)$/, "Materials " + group1 + pad_mar, d_title="Materials Needed ") 
  }
})

md.use(container, 'Figure', {
  render: function (tokens, idx) {
      return card(tokens, idx, /^Figure(.*)$/, "Figure " + pad_mar + group1, d_title="Figure #: ") 
  }
})
















/////////Utility

//Blank Card
function card(tokens, idx, regmatch, type, d_title=''){
  
  var m = tokens[idx].info.trim().match(regmatch);
  
  if (tokens[idx].nesting === 1) {
      if(type==''){
          type = md.utils.escapeHtml(m[1]).trim().split(' ').shift()
          }
      var title = md.utils.escapeHtml(m[1]).trim().split(' ').slice(1).join(' ')
      if(title==''){
      title = d_title
      }
      // opening tag
      return  '<div class="row justify-content-center">'
      +'<div class="card ' 
      + type
    

      + '" > '
      +'<div class="card-header"><h5 class="my-0">'
      +  title 
      + '</h5></div><div class="card-body text-dark p-0"><p class="card-text">';

  } else {
      return '</p></div></div></div>'
}
}


