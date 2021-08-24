//Reference Objects
var Counter = {}; //This keeps track of the number of each element and their reference name
var div_head = []; //This list lets us print out the headers for custom classes
var div_foot = []; //This list lets us print ou the footers of custom classes using first-in-first-out when there are nested containers

//Class Groups

const fig_group = "justify-content-center text-center px-0 mx-3 mb-4" //Formatting that is special for figues -- adds margins to floated figs

const narrow_center = "col-lg-9 mx-auto my-5"
const collapsable_header = ' fs-4 align-bottom'


class Card{
  constructor(type, ref) {
    //Correct for non-alphanumeric
    ref=(ref||'').replace(/[^a-zA-Z0-9-_]/g,'')
    //Static
    this.type=type
    
    this.number= updateCounter(ref,type)
    this.ref= type + '-' + (ref||this.number)  
    this.id = type + this.number;

    //Mutable -- can be set in the calling routine below
    this.collapse=false
    this.headerText=''
    this.footerText=''
    this.styleList=[type, 'card']
    //   innerStyles=[heading classes   , body container classes , body text classes, footer classes]
    this.innerStyles=['text-center my-0', 'text-left'            , 'px-2'           , 'text-center' ]
    
    //Apply certain styles depending on card type
    switch(type)
    {
      case 'Intro':
        this.styleList.push(narrow_center, 'my-2')
        this.innerStyles[1]='text-center'
        break
      case 'Exercise':
        this.collapse=false
        this.headerText=`Exercise ${this.number}`
        this.styleList.push(narrow_center, 'my-2')
        break
      case 'Equation':
        this.footerText= `Equation ${this.number}`
        this.styleList.push(narrow_center)
        break
      case 'Figure':
        this.footerText= 'Figure ' + this.number
        this.styleList.push(fig_group)
        break
      case 'Video':
        this.styleList.push('col-lg-8', 'mx-auto', 'my-2')
        this.innerStyles[1]+=' ratio ratio-16x9'
        this.footerText= `Video ${this.number}`
        break
      case 'Note':
        this.styleList.push('mx-auto', 'my-4', 'col-8 bg-caution bg-gradient')
        this.innerStyles[1]='text-center'
        this.headerText = '<i class="fa fa-thumb-tack fs-1" aria-hidden="true"></i>'
        break
      case 'Warning':
        this.styleList.push(' mx-auto bg-danger bg-gradient alert alert-warning alert-dismissible fade show hshaker')
        this.innerStyles= ['text-center text-light', 'text-center text-light fs-2', 'px-2' , 'text-center']
        this.headerText='<i class="fa fa-exclamation-triangle fs-1 rotor" aria-hidden="true"></i> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
        break
      case 'Definition':
        this.styleList.push(' mx-auto my-4')
        this.innerStyles[0]='text-left'
        this.headerText=`<strong > Definition ${this.number}: </strong>`
        break
      case 'Table':
        this.styleList.push(' mx-auto ')
        this.innerStyles[0]='text-left'
        this.footerText= 'Table ' + this.number
        break
      case 'Hider':
        this.collapse=true
        this.styleList.push(narrow_center)
        this.innerStyles[0]+= ' fs-5 align-bottom text-left'

        break
      case 'Activity':
        this.collapse=true
        this.headerText= 'Activity ' + this.number
        this.styleList.push('col-lg-11 my-5 mx-auto')
        this.innerStyles[0]+=collapsable_header
        break
      case 'Simulation':
        this.collapse=true
        this.headerText= 'Simulation ' + this.number
        this.styleList.push('col-lg-11 my-5 mx-auto')
        this.innerStyles[0]+= collapsable_header
        break
      case 'Card':
        this.styleList.push(narrow_center)
        break
      case 'Drop':
        this.collapse=true
        this.styleList.push(narrow_center)
        this.innerStyles[0]+= collapsable_header
        break
      

    } 
  }

  publishCard (){ 
    this.collapse ?  classAcc(this) : classCard(this);
    
  }

 }

function classCard(c) {
  div_head.push(`
  <div id="${c.ref}" 
    class="${[c.styleList.join(' ')]} " 
    data-kiwi="${c.number}" 
    data-type="${c.type}"> 
    ${c.headerText == '' || c.headerText == null ? '' :
      `<div class="card-header">
      <h5 class="${c.innerStyles[0]}">
        ${c.headerText}
      </h5>
    </div>`}

    <div class="container ${c.innerStyles[1]}">
      <div class="card-text card-body ${c.innerStyles[2]}">
    `)

  div_foot.push(`
      </div>
    </div>
    ${(c.footerText == '' || c.footerText == null ? '' :
      `<div class="card-footer">
      <h5 class="my-0 ${c.innerStyles[3]} ">
        ${c.footerText}
      </h5>
    </div>`)}
    </div>`)
 c= null
}

function classAcc(c) {

  div_head.push(`
  <div id="${c.ref}" 
    class="accordion accordion-flush card col-card ${[c.styleList.join(' ')]} " 
    data-kiwi="${c.number}" 
    data-type="${c.type}"> 
    <div class="accordion-item ">
        <button 
          class="accordion-button collapsed ${c.innerStyles[0]}" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#${c.id}" 
          aria-expanded="false" 
          aria-controls="${c.id}">
            ${c.headerText}
        </button>
        <div id="${c.id}" 
        class="accordion-collapse collapse card-text ${c.styleList[1]}" 
        aria-labelled-by="${c.id}" data-bs-parent="#${c.ref}">
          <div class="accordion-body container">
    `)

  div_foot.push(`
          </div>
        </div>
      </div>
    </div>`)
 c=null
}


//////////////// CUSTOM CONTAINER DEFS

///MATERIALS////
md.use(container, 'Materials', {
// Input Format is: 
// Materials (item 1 --- note 1|item 2 --- note 2|...)
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

///INTRODUCTION////
md.use(container, 'Intro', {  
  // Input Format is:
  // Intro (Heading Line|material 1 --- comment|material 2 --- comment| ...)
  render: function (tokens, idx) {   
    if (tokens[idx].nesting === 1) {  
      args = strip(tokens[idx].info.trim().match(/^Intro(.*)$/)[1])
      let intro=new Card("Intro", args[0].replace(/[^a-zA-Z0-9]/g,''))
      intro.headerText=args[0]
      intro.footerText=(args.slice(1).length ? materials(args.slice(1)) : null)
      intro.publishCard()
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})

///EXERCISE///
md.use(container, 'Exercise', {
  // Input Format is: 
  // Exercise (reference-name)
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Exercise(.*)$/)[1])
      let ex = new Card('Exercise', args[0])
      ex.publishCard()
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})

///EQUATION///
md.use(container, 'Equation', {
  // Input Format is: 
  // Equation (reference-name, optional-header)
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Equation(.*)$/)[1])
      let eq = new Card('Equation', args[0])
      eq.headerText= md.render(args[1] ?? '')
      eq.publishCard()    
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})

///VIDEO
md.use(container, 'Video', {
// Input Format is: 
// Video (reference-name| optional-header)
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Video(.*)$/)[1])
      let vid= new Card("Video", args[0])
      vid.headerText= args[1]
      vid.publishCard()

      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})
///

///NOTE
md.use(container, 'Note', {
// Input Format is: 
// Note (reference-name|width alignment)
  render: function (tokens, idx) {
    let args;

    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Note(.*)$/)[1])
      let note= new Card('Note', args[0])
      note.styleList.push(args[1] ? 'col-lg-' + args[1].replace("L","float-lg-start ").replace("R","float-lg-end") : 'col-lg-4 mx-auto' )
      note.publishCard()
 
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})

///WARNING
md.use(container, 'Warning', {
// Input Format is: 
// Warning (reference-name|optional-width)
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Warning(.*)$/)[1])
      let warn= new Card('Warning', args[0])
      warn.styleList.push(args[1] ? 'col-lg-' + args[1] : 'col-lg-5')
      warn.publishCard()
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})

///DEFINITION
md.use(container, 'Definition', {
  // Input Format is: 
  // Warning (optional-width)
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Definition(.*)$/)[1])

      let def= new Card("Definition", args[0])
      def.headerText+=`<span class='lead'>${args[0]} </span>`
      def.styleList.push(args[1] ? 'col-lg-' + args[1] : 'col-lg-10')
      def.publishCard()
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})



///TABLES
md.use(container, 'Table', {
  // Input Format is: 
  // Table (optional-ref|optional-title|width)
  render: function (tokens, idx) {
    let args;

    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Table(.*)$/)[1])
      let table=new Card("Table", args[0])
      table.styleList.push('col-lg-' + (args[2] ||'9') )
      table.footerText+=(args[1] || '')
      table.publishCard()
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
  // Input Format is: 
  // Hider (optional-ref|title)
  render: function (tokens, idx) {
    let args
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Hider(.*)$/)[1])
      let hide= new Card('Hider', args[0] )
      hide.headerText=args[1]
      hide.publishCard()
      //card_maker_collapse('Hider', args[0], args[1], [group1, pad_mar].join(' '), inner_styles)
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})



///ACTIVITY
md.use(container, 'Activity', {
  // Input Format is: 
  // Activity (optional-ref|optional-title)
  render: function (tokens, idx) {
    let args
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Activity(.*)$/)[1])
      let activity = new Card('Activity', args[0])
      activity.headerText+= args[1] ?  `│ <span class='lead align-baseline' style="padding-left:0px"> ${args[1]} </span>` : ''
      activity.publishCard()
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})

///SIMULATION
md.use(container, 'Simulation', {
  // Input Format is: 
  // Simulation (optional-ref|optional-title)
  render: function (tokens, idx) {
    let args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Simulation(.*)$/)[1])
      let sim= new Card('Simulation', args[0] )
      var title = 'Simulation #'
      if (args[1]) {
       sim.headerText+= `:<span class='lead' style="padding-left:10px"> ${args[1]} </span>`
      }
      sim.publishCard()
      // card_maker_collapse('Simulation', args[0], title, [group1, pad_mar, args[2]].join(' '))
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})



///FIGURES: Complicated so use helper func/////////////
md.use(container, 'Figure', {
  // Input Format is: 
  // Figure (optional-ref|[size: xs, s, m, l, xl]|styles[R, L, Row])
  render: function (tokens, idx) {
    var args;
    if (tokens[idx].nesting === 1) {
      args = strip(tokens[idx].info.trim().match(/^Figure(.*)$/)[1])
      fig = new Card('Figure', args[0])
      fig.styleList.push(args[1] || '')
      if (args[2]) {
        if (args[2].includes('Row')) {
          fig.styleList.push('mx-auto')
        } else if (!args[2].includes("L") && !args[2].includes("R")) {
          fig.styleList.push('mx-auto')
        }
      } else {
        fig.styleList.push('mx-auto')
      }

      fig.styleList.push(args[2] ? args[2].replace('Row', 'rowfig').replace('L', 'float-lg-start').replace('R', 'float-lg-end') : '')
      fig.publishCard()
      // card_maker('Figure', args[0], '', 'Figure #', [fig_group, extra, args[1]].join(' '), ['', 'text-center', ''])
      return div_head.pop()
    } else {
      return div_foot.pop()
    }
  }
})


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






///GENERIC CARD

md.use(container, 'Card', {
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(/^Card(.*)$/)[1])
    
    let card = new Card('Card',args[0])
    card.headerText=args[1]
    card.footerText=args[2]
    card.styleList.push(args.slice(3))  
    card.publishCard()
    return div_head.pop()
    }else{
      return div_foot.pop()
    }
  }
})


///GENERIC Accordion
md.use(container, 'Drop', {
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
    args = strip(tokens[idx].info.trim().match(/^Drop(.*)$/)[1])
    
    let drop = new Card('Drop',args[0])
    drop.headerText=args[1]
    drop.footerText=args[2]
    drop.innerStyles[0]+= ' ' + args.slice(3)  
    drop.publishCard()
    return div_head.pop()
    }else{
      return div_foot.pop()
    }
  }
})
















////////////////////////////Utility Card Routines
//This counter
function updateCounter(ref, type){
  let this_count
  if (Counter[type]) {
    this_count= Counter[type].length + 1
    if (ref == '') {
      Counter[type].push([this_count, type+'-'+this_count])
    }else{
      Counter[type].push([this_count, type+'-'+ref])
    }
   ;
  } else {
    this_count=1
    Counter[type] = []
    
    if (ref == '') {
      Counter[type][0]=[this_count, type+'-'+this_count]
    }else{
      Counter[type][0]=[this_count, type+'-'+ref]
    }

  }

  return this_count
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
      return `<div class= "  align-items-end col-lg${args[0] ? (/\d/.test(args[0]) ? `-${args[0]}` : ` ${args[0]}`): ''}">`;
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
      return `<div class="d-flex flex-row align-items-baseline ${args[0]}">`;
    } else {
      return '</div>'
    }
  }
});

















//////////////////Card making functions




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
      let string= `
      <div class="Summary card col-lg-8 mx-auto ">
        <div class="card-header text-center display-6 ">
          Summary of the Lab
        </div>`
      
      string+=`
      <div class='row g-0' >
        <div class='col-3 text-center badge-Activity container fs-3 text-white'>
          <span class='badge badge-Activity fs-1 text-white'> ${Counter["Activity"].length} </span> <br> Activities
          </div> `    
      string+=`
        <div class='col-9' style='border-bottom:1px solid var(--bs-secondary)'>
          <ul class="list-inline px-1 py-0 mb-3 " >`
      Counter["Activity"].forEach((e)=> {
        string += `<li class="list-inline-item align-middle py-1">
            <a 
              tabindex="0"  
              href="#${e[1]}"
              role="button" 
              class="btn btn-sm badge-Activity position-relative mats text-white"  
              aria-pressed="false" autocomplete="off">
              Activity ${e[0]}
            </a>
          </li>`
        })
          

        string+=`
        </ul>
        </div>
      
        </div>
    
        <div class='row g-0'>
        <div class='col-3 text-center badge-Exercise container fs-3 text-white'>
          <span class='badge badge-Exercise fs-1 text-white'> ${Counter["Exercise"].length} </span> <br> Exercises
          </div> `
       
      string+=`
        <div class='col-9 '>
          <ul class="list-inline px-1 py-0 mb-3 " >`
 
        Counter["Exercise"].forEach((e)=> {
          string += `<li class="list-inline-item align-middle py-1">
              <a 
                tabindex="0"  
                href="#${e[1]}"
                role="button" 
                class="btn btn-sm badge-Exercise position-relative mats text-white"  
                aria-pressed="false" autocomplete="off">
                Exercise ${e[0]}
              </a>
            </li>`
          })
          
        string+=`</ul>
        </div>
        </div>
        <div class="card-footer text-center py-2" >
          Please be sure to complete all parts of the lab`
      return string
      ;
    } else {
      return ' </div></div>'
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