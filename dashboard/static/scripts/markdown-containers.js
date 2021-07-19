//Reference Objects
var Counter = {}; //This keeps track of the number of each element and their reference name
var div_head = []; //This list lets us print out the headers for custom classes
var div_foot = []; //This list lets us print ou the footers of custom classes using first-in-first-out when there are nested containers

//Class Groups
const pad_mar = "px-0 mx-auto my-5" //Applies 0 padding, auto margin (centers element), and bottom margin to most card groups
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
      card_maker('Intro', args[0].replace(' ','_'), args[0], materials(args.slice(1)), [group1, pad_mar].join(' '), inner_styles)
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})

///MATERIALS////
// md.use(container, 'Materials', {
//   render: function (tokens, idx) {
//     let args, inner_styles; //Define list to accept arguments (reference|styles)
//     if (tokens[idx].nesting === 1) {
//       args = strip(tokens[idx].info.trim().match(/^Materials(.*)$/)[1]) //identifies the text that is not "Materials", and identifies arguments seperated by a | 
//       inner_styles = ['text-center', 'text-left', 'text-center']
//       if(!args[1]||args[1]==''){
//         args[1]="col-lg-4 "+ pad_mar
//       } else{
//         args[1]= "col-lg-" + args[1]
//       }
//       card_maker('Materials', args[0], 'Materials', '', [ args[1]].join(' '), inner_styles)
//       return div_head.pop()
//     } else {
//       return div_foot.pop()
//     }
//   }
// })

///MATERIALS////
md.use(container, 'Materials', {
  render: function (tokens, idx) {
    let args
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Materials(.*)$/)[1]) //identifies the text that is not "Materials", and identifies arguments seperated by a | 
     
      
      return materials(args)
    } else {
      return '</ul></span> '
    }
  }
})




///Exercise///
md.use(container, 'Exercise', {
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Exercise(.*)$/)[1])
      card_maker('Exercise', args[0], 'Exercise #', '', [group1, pad_mar, args[1]].join(' '))
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

      if (!args[1]) {
        args[1] = 'col-lg-5 mx-auto'
      } else {
        note_size = 'col-lg-' + args[1].replace("L","float-lg-start ").replace("R","float-lg-end")
        args[1] = note_size

      }
      card_maker('Note', args[0], '<i class="fa fa-thumb-tack fs-1" aria-hidden="true"></i>', '', ["col-8",args[1], "mx-auto my-4", 'bg-caution bg-gradient'].join(' '))
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

      if (!args[1]) {
        args[1] = 'col-lg-5'
      } else {
        note_size = 'col-lg-' + args[1]
        args[1] = note_size

      }
      card_maker('Warning', args[0], '<i class="fa fa-exclamation-triangle fs-1 rotor" aria-hidden="true"></i> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '', [args[1], pad_mar, 'bg-danger bg-gradient alert alert-warning alert-dismissible fade show hshaker'].join(' '), ['text-center text-light', 'text-center text-light fs-2', 'text-center'])
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})


md.use(container, 'Definition', {
  render: function (tokens, idx) {
    let args;
    let inner_styles = ['text-left ', 'text-left ', 'text-center']

    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Definition(.*)$/)[1])

      if (!args[1]) {
        args[1] = 'col-lg-10'
      } else {
        note_size = 'col-lg-' + args[1]
        args[1] = note_size

      }
      card_maker('Definition', args[0], `<strong > Definition #:</strong> <span class='lead'>${args[0]} </span>` , '', [args[1], pad_mar].join(' '), inner_styles)
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

      if (!args[2]) {
        args[2] = 'col-lg-9'
      }

      title = 'Table #'
      if (args[1]) {
        title += ':' + args[1]
      }

      card_maker('Table', args[0], '', title, [args[2], pad_mar].join(' '), ['text-center ', 'text-center ', 'text-center'])
      return div_head.pop()
    } else {
      return div_foot.pop()
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
      inner_styles = ['text-center', 'text-left', 'text-center']
      card_maker_collapse('Hider', args[0], args[1], [group1, pad_mar].join(' '), inner_styles)
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})



///Activity
md.use(container, 'Activity', {
  render: function (tokens, idx) {
    let args, inner_styles;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Activity(.*)$/)[1])
      var title = 'Activity #'
      if (args[1]) {
        title += ` │ <span class='lead align-baseline' style="padding-left:0px"> ${args[1]} </span>`
      }
      inner_styles = ['text-center', 'text-left', 'text-center']
      card_maker_collapse('Activity', args[0], title, ["col-lg-11", pad_mar, args[1]].join(' '), inner_styles)
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
      args = strip(tokens[idx].info.trim().match(/^Simulation(.*)$/)[1])
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


///Contact infor///
md.use(container, 'ContactTA', {
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^ContactTA(.*)$/)[1])

      return contacts("TAs")

    } else {
      return ''
    }
  }
})


md.use(container, 'ContactFA', {
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^ContactFA(.*)$/)[1])
      return contacts("Faculty")

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
    `<div id ="${type + '-' + ref}" class=" ${[type, card_style].join(' ')} card" data-kiwi="${this_count}" data-type="${type}"> `;
  if (header != '' && header != null) {
    opening_string +=
      `<div class="card-header  ">
        <h5 class="my-0 ${content_style[0]} align-baseline ">
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
  if (footer != '' && footer != null) {
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

  var uniqueid = [type, this_count, "ac"].join('-')
  if (header == '') {
    header = type
  }
  var opening_string =
    `<div class="row justify-content-center">
      <div id ="${type + '-' + ref}" class="accordion accordion-flush card col-card ${[type, card_style].join(' ')}" data-kiwi="${this_count}" data-type="${type}" >
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
      args = strip(tokens[idx].info.trim().match(/^col(.*)$/)[1])
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
      args = strip(tokens[idx].info.trim().match(/^row(.*)$/)[1])
      // opening tag
      return `<div class="row ${args[0]}">`;
    } else {
      return '</div>'
    }
  }
});

















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

/////////////////Uggly


function contacts(kind) {


  let role = ''
  let elmt =
    `<div class="row justify-content-center">
        <div id ="Contact${kind}" class="accordion accordion-flush card col-card Contact col-md-8 my-3 p-0" >
          <div class="accordion-item"> 
            <span class="my-0 accordion-header">
              <button class="accordion-button collapsed bg-UCSB-navy text-UCSB-gold" type="button" data-bs-toggle="collapse" data-bs-target="#Contact-${kind}" aria-expanded="false" aria-controls="Contact-${kind}">
               <div class="card-but"> Contact ${kind} of this Course</div>
              </button>
            </span>
            <div id="Contact-${kind}" class="accordion-collapse collapse card-text" aria-labelled-by="Contact-${kind}" data-bs-parent="#Contact${kind}">
              <div class="accordion-body  p-0">
       
    `
    sitedata[kind].forEach( (e)=> {

    if (kind == "Faculty") {
      role = ` <li class="list-inline-item "><strong>Role:</strong> ${e["title"]} </li>`
    }
    elmt += `  
      <div class="card " style="width:100%; overflow:hidden">
      <div class="row g-0">
      <div class="ratio ratio-1x1" style="
            width:150px;
            background-image: url( ${e["img"]});
            background-size:cover;
            background-position:center;  ">
      
       
      </div>
      <div style="width:calc(100% - 150px)">
        <div class="card-body">
          <h5 class="card-title">${e["first-name"] + ' ' + e["last-name"]}
          <small class='text-muted'>${e["pronouns"]}</small>
                  <small class="badge bg-UCSB-navy address">${e["email"].replace('@','&commat;')}</small>
          </h5>
          <ul class="list-inline p-0 m-0 ">
                  <li class="list-inline-item "><strong>Office Hours:</strong> ${e["officehours"]}</li>
                  <li class="list-inline-item "><strong>Section Hours:</strong> ${e["sectionhours"]}</li>
                  <li class="list-inline-item "><strong>Location:</strong> <a href="${e["zoom"]}">Room</a></li>
                  ${role}
                </ul>
        </div>
      </div>
    </div>
  </div>
          `
  })

  elmt += `</div> 
    </div>
            </div>
          </div>
        </div>
      </div>`
  return elmt

}




md.use(container, 'Summary', {

  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Summary(.*)$/)[1])
      // opening tag
      return `<div class="Summary card col-lg-8 mx-auto">
      <div class="card-header">
      Summary of the Lab
      </div>
      <div class="card-body">
      There were ${Counter["Activity"].length} Activities and ${Counter["Exercise"].length} Exercises
      </div>
      
      `
      
      ;
    } else {
      return '</div>'
    }
  }
});



function materials(args) {
  let obj, deet

  let list = `
     <ul class="list-inline Materials px-1 py-0 mb-3 " style='border-top: 1px solid var(--bs-UCSB-lightgray); border-bottom: 1px solid var(--bs-UCSB-lightgray)'>
      <li class="list-inline-item align-middle">
        <span class=' fs-5' >
          Materials: 
        </span>
      </li>  
      `
  args.forEach((e) => {obj = e.split('---')[0]; deet = e.split('---').slice(1).join(' ');
    list += `<li class="list-inline-item align-middle py-1">
              <a tabindex="0"  role="button" class="btn btn-sm btn-UCSB-navy position-relative mats" 
                ${deet ? 'data-bs-placement="bottom"  data-bs-toggle="popover" data-bs-trigger="focus" title="" data-bs-content="' + deet + '"' : ''} 
                aria-pressed="false" autocomplete="off">
                ${obj} 
                ${deet ? '<span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"><span class="visually-hidden">Click for Info</span></span>' : ''}
              </a>
            </li>`
  })
  return list;

}