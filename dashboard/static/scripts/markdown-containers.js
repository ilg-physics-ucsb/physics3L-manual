//Reference Objects
var Counter = {}; //This keeps track of the number of each element and their reference name
var div_head = []; //This list lets us print out the headers for custom classes
var div_foot = []; //This list lets us print ou the footers of custom classes using first-in-first-out when there are nested containers

//Class Groups
const pad_mar = "px-0 mx-auto mb-4" //Applies 0 padding, auto margin (centers element), and bottom margin to most card groups
const group1 = "col-lg-9" // forces a 75% columnar layout that expands to 95% width on small screens
const fig_group = "justify-content-center text-center px-0 mx-3 mb-4" //Formatting that is special for figues -- adds margins to floated figs


//////////////// CUSTOM CONTAINER DEFS

///INTRODUCTION////
md.use(container, 'Intro', {
  render: function (tokens, idx) {
    let args, inner_styles;

    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Intro(.*)$/)[1])
      inner_styles = ['text-center', 'text-left', 'text-center']
      card_maker('Intro', args[0], args[1], '', [group1, pad_mar].join(' '), inner_styles)
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})

///MATERIALS////
md.use(container, 'Materials', {
  render: function (tokens, idx) {
    let args, inner_styles; //Define list to accept arguments (reference|styles)
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Materials(.*)$/)[1]) //identifies the text that is not "Materials", and identifies arguments seperated by a | 
      inner_styles = ['text-center', 'text-left', 'text-center']
      card_maker('Materials', args[0], 'Materials', '', [pad_mar, args[1]].join(' '), inner_styles)
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})



///QUESTION///
md.use(container, 'Question', {
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Question(.*)$/)[1])
      card_maker('Question', args[0], 'Question #', '', [group1, pad_mar, args[1]].join(' '))
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
}) 

///EQUATION///
md.use(container, 'Equation', {
  render: function (tokens, idx) {
    let args;

    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Equation(.*)$/)[1])
      
  
      card_maker('Equation', args[0], args[1], 'Equation #', [group1, pad_mar].join(' '))
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})



///VIDEO
md.use(container, 'Video', {
  render: function (tokens, idx) {
    let args;

    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Video(.*)$/)[1])
      
  
      card_maker('Video', args[0], args[1], 'Video #', [group1, "mx-auto px-0"].join(' '), ['text-center', 'text-center ratio ratio-16x9', 'text-center'])
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})
///


///Note
md.use(container, 'Note', {
  render: function (tokens, idx) {
    let args;

    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Note(.*)$/)[1])
      
      if(!args[1]){
        args[1]='col-lg-5'
      }else{
        note_size= 'col-lg-'+args[1]
        args[1]=note_size
        console.log(args[1])
      }
      card_maker('Note', args[0], '<i class="fa fa-thumb-tack fs-1" aria-hidden="true"></i>','', [ args[1], pad_mar, 'bg-caution bg-gradient' ].join(' '))
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})


///Warning
md.use(container, 'Warning', {
  render: function (tokens, idx) {
    let args;

    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Warning(.*)$/)[1])
      
      if(!args[1]){
        args[1]='col-lg-5'
      }else{
        note_size= 'col-lg-'+args[1]
        args[1]=note_size
        console.log(args[1])
      }
      card_maker('Warning', args[0], '<i class="fa fa-exclamation-triangle fs-1 rotor" aria-hidden="true"></i> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>','', [ args[1], pad_mar, 'bg-danger bg-gradient alert alert-warning alert-dismissible fade show hshaker' ].join(' '), ['text-center text-light', 'text-center text-light fs-2', 'text-center'])
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})
///


///Table
md.use(container, 'Table', {
  render: function (tokens, idx) {
    let args;

    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Table(.*)$/)[1])
      
    if(!args[2]){
      args[2]='col-lg-9'
    }

    title='Table #'
    if(args[1]){
      title+=':' + args[1]
    }

      card_maker('Table', args[0], '',title, [ args[2], pad_mar ].join(' '), ['text-center ', 'text-center ', 'text-center'])
      return div_head.pop() 
    } else {
      return  div_foot.pop()
    }
  }
})
///




//////////////////////////////////////COLLAPSING
///Hider

md.use(container, 'Hider', {
  render: function (tokens, idx) {
    let args, inner_styles;

    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Hider(.*)$/)[1])
      inner_styles=['text-center', 'text-left', 'text-center']
      card_maker_collapse('Hider', args[0], args[1], [group1, pad_mar].join(' '), inner_styles)
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})



///Exercise
md.use(container, 'Exercise', {
  render: function (tokens, idx) {
    let args, inner_styles;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Exercise(.*)$/)[1])
      var title = 'Exericse #'
      if (args[1]) {
        title += `:<span class='lead' style="padding-left:10px"> ${args[1]} </span>`
      }
      inner_styles=['text-center', 'text-left', 'text-center']
      card_maker_collapse('Exercise', args[0], title, ["col-lg-11", pad_mar, args[1]].join(' '), inner_styles)
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})

///SIMULATION///
md.use(container, 'Simulation', {
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match( /^Simulation(.*)$/)[1])
      var title = 'Simulation #'
      if (args[1]) {
        title += `:<span class='lead' style="padding-left:10px"> ${args[1]} </span>`
      }
  
      card_maker_collapse('Simulation', args[0], title, [group1, pad_mar, args[2]].join(' '))
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})



////SINGLE  USE


///SIMULATION///
md.use(container, 'Contact', {
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match( /^Contact(.*)$/)[1])
  
      elmt= `
      
        <div class="card mx-auto col-lg-8 ">
        <div class="card-header text-center lead">Contact Information for this Course</div>
        
        
        <span class="display-6 text-center fs-4">TAs</span> <small class="text-muted text-center mx-3"> Your Teaching Assistant (TA) is your first point of contact for this course. 
        Please reach out to them if you have questions about labs, completing your assignments, grading and regrade requests, as well as attendance. </small>
        
        `

      for(i=0;i<sitedata["TAs"].length;i++){
      elmt+=`  
      <div class="card m-0" style="max-width: 100%; max-height:200px; overflow:hidden;">
      <div class="row g-0">
        <div class="col-md-2" >
          <img src="${sitedata["TAs"][i]["img"]}" class="img-fluid rounded-start img-thumbnail" style="height:120px; max-width:120px; clip: rect(0px,60px,200px,0px)" >
        </div>
        <div class="col-md-10">
          <div class="card-body" style="font-size:0.9rem">
            <h6 class="card-title">${sitedata["TAs"][i]["first-name"]+ ' ' + sitedata["TAs"][i]["last-name"]} 
              <small class='text-muted'>${sitedata["TAs"][i]["pronouns"]}</small>
              <small class="badge bg-primary"><a href="mailto:${sitedata["TAs"][0]["email"]}" class='text-white' style="text-decoration:none">${sitedata["TAs"][0]["email"]}</a></small>
            </h5>
            <ul class="list-inline">
              <li class="list-inline-item"><strong>Office Hours:</strong> ${sitedata["TAs"][i]["officehours"]}</li>
              <li class="list-inline-item"><strong>Section Hours:</strong> ${sitedata["TAs"][i]["sectionhours"]}</li>
              <li class="list-inline-item"><strong>Location:</strong> <a href="${sitedata["TAs"][i]["zoom"]}">Room</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`
      }

      elmt+= `
      
      <br>
      <span class="display-6 text-center fs-4">Instructors & Faculty</span> <small class="text-muted text-center mx-3"> Your Teaching Assistant (TA) is your first point of contact for this course. 
      Please reach out to them if you have questions about labs, completing your assignments, grading and regrade requests, as well as attendance. </small>
      
      `

      for(i=0;i<sitedata["Faculty"].length;i++){
        elmt+=`  
        <div class="card m-0" style="max-width: 100%; max-height:200px; overflow:hidden;">
        <div class="row g-0">
          <div class="col-md-2" >
            <img src="${sitedata["Faculty"][i]["img"]}" class="img-fluid rounded-start ratio ratio-1x1" style="height:120px" >
          </div>
          <div class="col-md-10">
            <div class="card-body" style="font-size:0.9rem">
              <h6 class="card-title">${sitedata["Faculty"][i]["first-name"]+ ' ' + sitedata["TAs"][i]["last-name"]} 
                <small class='text-muted'>${sitedata["Faculty"][i]["pronouns"]}</small>
                <small class="badge bg-primary"><a href="mailto:${sitedata["Faculty"][0]["email"]}" class='text-white' style="text-decoration:none">${sitedata["TAs"][0]["email"]}</a></small>
              </h5>
              <ul class="list-inline">
                <li class="list-inline-item"><strong>Office Hours:</strong> ${sitedata["Faculty"][i]["officehours"]}</li>
                <li class="list-inline-item"><strong>Section Hours:</strong> ${sitedata["Faculty"][i]["sectionhours"]}</li>
                <li class="list-inline-item"><strong>Location:</strong> <a href="${sitedata["Faculty"][i]["zoom"]}">Room</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>`
        }

      elmt+=`</div>`
      return elmt
      
    } else {
      return ''
    }
  }
})



///FIGURES: Complicated so use helper func/////////////


md.use(container, 'Figure', {
  render: function (tokens, idx) {
    return figure(tokens, idx, /^Figure(.*)$/, 'mx-auto')
  }
})

md.use(container, 'LFigure', {
  render: function (tokens, idx) {
    return figure(tokens, idx, /^LFigure(.*)$/, 'float-lg-start')
  }
})

md.use(container, 'RFigure', {
  render: function (tokens, idx) {
    return figure(tokens, idx, /^RFigure(.*)$/, 'float-lg-end')
  }
})

md.use(container, 'RowFigure', {
  render: function (tokens, idx) {
    return figure(tokens, idx, /^RowFigure(.*)$/, 'Figure rowfig mx-auto')
  }
})


///GENERIC CARD

md.use(container, 'Card', {
  render: function (tokens, idx) {
    args = ['', '', '', '']
    return generic(tokens, idx, /^Card(.*)$/, "Card")
  }
})


//////////////////Card making functions



function generic(tokens, idx, regmatch, type, extras = [group1, pad_mar].join(' ')) {
  var m = tokens[idx].info.trim().match(regmatch);
  var ref, header, footer, style, args;

  if (tokens[idx].nesting === 1) {
    args = md.utils.escapeHtml(m[1]).trim().replace(/[()]/g, '').split('|')
    ref = args[0]
    header = args[1]
    footer = args[2]
    style = args.slice(3).join(' ')
    console.log(footer)
    card_maker(type, ref, header, footer, [style, extras].join(' '))
    return div_head.pop()
  } else {
    return div_foot.pop()
  }
}



function figure(tokens, idx, regmatch, extra = '') {
  var args;

  if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(regmatch)[1])
    card_maker('Figure', args[0], '', 'Figure #', [fig_group, extra, args[1]].join(' '), ['', 'text-center', ''])
    return div_head.pop() 
  } else {
    return div_foot.pop() 
  }
}












////////////////////////////Utility Card Routines



//Blank Cards
function card_maker(type, ref, header, footer, card_style, content_style = ['text-center', 'text-center', 'text-center']) {
  var card_id
  var this_count
  if (Counter[type]) {
    this_count = Counter[type].length + 1
    if (ref == '') {
      ref = this_count.toString()
    }
    Counter[type].push([this_count, ref]);
    card_id = type + Counter[type]
  } else {
    Counter[type] = []
    this_count = 1
    if (ref == '') {
      ref = this_count.toString()
    }
    Counter[type][0] = [1, ref]
  }


  var opening_string =
    `<div id =" ${type + '-' + ref}" class=" ${[type, card_style].join(' ')} card" data-kiwi="${this_count}"> `;
  if (header != '' && header!=null) {
    opening_string +=
      `<div class="card-header ">
        <h5 class="my-0 ${content_style[0]} ">
          ${header.replace('#', this_count)}
        </h5>
      </div>`;
  }
  opening_string +=
    `<div class=" container  ${content_style[1]}">
        <div class="card-text card-body px-2">`;

  var closing_string =
    `</div>
        </div>`;
  if (footer != '' && footer!=null) {
    closing_string +=
      `<div class="card-footer">
        <h5 class="my-0 ${content_style[2]} ">
          ${footer.replace('#', this_count)}
        </h5>
      </div>`;
  }
  closing_string +=
    `</div>`


  div_head.push(opening_string)
  div_foot.push(closing_string)
}




//Blank Card Collapse
function card_maker_collapse(type, ref, header, card_style, content_style = ['text-center', 'text-center', 'text-center']) {
  var card_id
  var this_count
  if (Counter[type]) {
    this_count = Counter[type].length + 1
    Counter[type].push([this_count, ref]);
    card_id = type + Counter[type]
  } else {
    Counter[type] = []
    this_count = 1
    Counter[type][0] = [1, ref]
  }
  console.log(Counter)
  console.log(header)
  var uniqueid = [type, this_count, "ac"].join('-')
  if (header == '') {
    header = type
  }
  var opening_string =
    `<div class="row justify-content-center">
      <div id ="${type + '-' + ref}" class="accordion accordion-flush card col-card ${[type, card_style].join(' ')}" >
        <div class="accordion-item"> 
          <span class="my-0 accordion-header ${content_style[0]}">
            <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#${uniqueid}" aria-expanded="false" aria-controls="${uniqueid}">
             <div class="card-but"> ${header.replace('#', this_count)}</div>
            </button>
          </span>
          <div id="${uniqueid}" class="accordion-collapse collapse card-text px-2 ${content_style[1]}" aria-labelled-by="${uniqueid}" data-bs-parent="#${type + '-' + ref}">
            <div class="accordion-body container ">`
    ;
  var closing_string =
    `</div>
          </div>
        </div>
      </div>
    </div>`

  div_head.push(opening_string)
  div_foot.push(closing_string)
}




////Small Things

function strip(m) {
  return md.utils.escapeHtml(m).trim().replace(/[()]/g, '').split('|')
}


md.use(container, 'col', {

  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args=strip(tokens[idx].info.trim().match(/^col(.*)$/)[1])
      // opening tag
      return `<div class="col-lg ${args[0]}">`;
    } else {
      return '</div>'
    }
  }
});


md.use(container, 'row', {

  render: function (tokens, idx) {

    let args;
    if (tokens[idx].nesting === 1) {
      args=strip(tokens[idx].info.trim().match(/^row(.*)$/)[1])
      // opening tag
      return `<div class="row ${args[0]}">`;
    } else {
      return '</div>'
    }
  }
});





