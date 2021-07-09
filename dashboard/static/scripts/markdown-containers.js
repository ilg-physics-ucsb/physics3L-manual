//Reference Objects
var Counter = {}; //This keeps track of the number of each element and their reference name
var div_head = []; //This list lets us print out the headers for custom classes
var div_foot = []; //This list lets us print ou the footers of custom classes using first-in-first-out when there are nested containers

//Class Groups
const pad_mar = "px-0 mx-auto mb-4" //Applies 0 padding, auto margin (centers element), and bottom margin to most card groups
const group1 = "col-lg-9" // forces a 75% columnar layout that expands to 95% width on small screens
const fig_group = "justify-content-center text-center px-0 mx-3 mb-4" //Formatting that is special for figues -- adds margins to floated figs


//////////////// CUSTOM CONTAINER DEFS

///MATERIALS////
md.use(container, 'Materials', {

  render: function (tokens, idx) {

  var args; //Define list to accept arguments (reference|styles)
  if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(/^Materials(.*)$/)[1]) //identifies the text that is not "Materials", and identifies arguments seperated by a | 
    card_maker('Materials', args[0], 'Materials', '', [pad_mar, args[1]].join(' '), ['text-center', 'text-left', 'text-center'])
    return div_head.pop()
  } else {
    return div_foot.pop()
  }
}
})



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

md.use(container, 'Intro', {
  render: function (tokens, idx) {
    return intro(tokens, idx, /^Intro(.*)$/)
  }
})

md.use(container, 'Hider', {
  render: function (tokens, idx) {
    return hider(tokens, idx, /^Hider(.*)$/)
  }
})
md.use(container, 'Exercise', {
  render: function (tokens, idx) {
    return exercise(tokens, idx, /^Exercise(.*)$/)
  }
})

md.use(container, 'Question', {
  render: function (tokens, idx) {
    return question(tokens, idx, /^Question(.*)$/)
  }
})

md.use(container, 'Equation', {
  render: function (tokens, idx) {
    return equation(tokens, idx, /^Equation(.*)$/)
  }
})

md.use(container, 'Simulation', {
  render: function (tokens, idx) {
    return simulation(tokens, idx, /^Simulation(.*)$/)
  }
})




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
  var ref, style, args;

  if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(regmatch)[1])
    ref = args[0]
    style = args[1]
    card_maker('Figure', ref, '', 'Figure #', [fig_group, extra, style].join(' '), ['', style, ''])
    return div_head.pop()
  } else {
    return div_foot.pop()
  }
}

function materials(tokens, idx, regmatch) {

  
}

function intro(tokens, idx, regmatch) {

  var ref, args;

  if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(regmatch)[1])
    ref = args[0]
    header = args[1]

    card_maker('Intro', ref, header, '', [group1, pad_mar].join(' '), ['text-center', 'text-left', 'text-center'])
    return div_head.pop()
  } else {
    return div_foot.pop()
  }
}

function hider(tokens, idx, regmatch) {
  var ref, args;

  if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(regmatch)[1])
    ref = args[0]
    header = args[1]

    card_maker_collapse('Hider', ref, header, [group1, pad_mar].join(' '), ['text-center', 'text-left', 'text-center'])
    return div_head.pop()
  } else {
    return div_foot.pop()
  }
}


function exercise(tokens, idx, regmatch) {
  var ref, args;
  if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(regmatch)[1])
    ref = args[0]
    header = args[1]
    var title= 'Exericse #'
    if(header){
      title+=`: <span class='lead'> ${header} </span>`
    }

    card_maker_collapse('Exercise', ref, title, [group1, pad_mar].join(' '), ['text-center', 'text-left', 'text-center'])
    return div_head.pop()
  } else {
    return div_foot.pop()
  }
}

function simulation(tokens, idx, regmatch) {
  var ref, args;
  if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(regmatch)[1])
    ref = args[0]
    header = args[1]

    card_maker_collapse('Simulation', ref, 'Simulation #', [group1, pad_mar].join(' '), ['text-center', 'text-center', 'text-center'])
    return div_head.pop()
  } else {
    return div_foot.pop()
  }
}


function question(tokens, idx, regmatch) {
 
  var ref, args;

  if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(regmatch)[1])
    ref = args[0]
    header = args[1]

    card_maker('Question', ref, 'Question #', '', [group1, pad_mar].join(' '), ['text-center', 'text-left', 'text-center'])
    return div_head.pop()
  } else {
    return div_foot.pop()
  }
}


function equation(tokens, idx, regmatch) {

  var ref, args;

  if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(regmatch)[1])
    ref = args[0]
    header = args[1]
    if (!header) {
      header = ''
    }

    card_maker('Equation', ref, header, 'Equation #', [group1, pad_mar].join(' '), ['text-center', 'text-left', 'text-center'])
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
    `<div id =" ${type + '-' + ref}" class="card ${[type, card_style].join(' ')}" data-kiwi="${this_count}"> `;
  if (header != '') {
    opening_string +=
      `<div class="card-header ">
        <h5 class="my-0 ${content_style[0]} ">
          ${header.replace('#', this_count)}
        </h5>
      </div>`;
  }
  opening_string +=
    `<div class=" container ${content_style[1]}">
        <div class=" card-body card-text px-2">`;

  var closing_string =
    `</div>
        </div>`;
  if (footer != '') {
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
          <h5 class="my-0 accordion-header ${content_style[0]}">
            <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#${uniqueid}" aria-expanded="false" aria-controls="${uniqueid}">
             <div class="card-but"> ${header.replace('#', this_count)}</div>
            </button>
          </h5>
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

function strip(m){
 return md.utils.escapeHtml(m).trim().replace(/[()]/g, '').split('|')
}


md.use(container, 'col', {

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^col(.*)$/);
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="col-lg">';
    } else {
      return '</div>'
    }
  }
});


md.use(container, 'row', {

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^col(.*)$/);
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="row">';
    } else {
      return '</div>'
    }
  }
});





