const the_body= `


<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
<a class="navbar-brand d-none d-lg-block me-0 px-3 text-center" href="#" style="width:350px">UCSB Physics 6CL</a>
<button class="navbar-toggler  d-lg-none collapsed " id="sidebar-button" type="button" data-bs-target="#sidebarMenu"
  aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon "></span>
</button>
<div class="navbar-expand float-end nav-buffer">

  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="?linkfile=home">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="?linkfile=FAQ">FAQ</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        Get Help
      </a>
      <ul id="TA_list" class="dropdown-menu dropdown-menu-end p-0" aria-labelledby="navbarDropdown">
        
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        Labs
      </a>
      <ul id='lab_list' class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

        
      </ul>
    </li>
  </ul>


</div>
</header>
<!-- IMAGE Modal -->
<div class="modal fade " id="imgModal" tabindex="-1" aria-labelledby="img-info-modal" aria-hidden="true">
<div class="modal-dialog modal-xl">
<div class="modal-content">
  <div class="modal-header">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body text-center" id="img-modal-body">
    
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
     </div>
</div>
</div>
</div>


<div class="container-fluid">
<div class="row">
  <!---------------- SIDEBAR STUFF --------------------->

  <nav id="sidebarMenu" class=" container-sm  d-md-block bg-light sidebar offcanvas-collapse"
    style=" bottom:0px; overflow-y: scroll; ">
    <div class="position-sticky" id='nav_acc'>

      <!-- Naviagtion Accordion -->

      <div class="accordion accordion" id="navcordion">
        <div class="accordion-item">

          <h2 class="accordion-header" id="NA-TOC">
            <button class="accordion-button ac-top" type="button" data-bs-target="#TOC" data-bs-toggle="collapse"
              aria-expanded="true" aria-controls="TOC">
              <b class="lead text-center">Table of Contents</b>
            </button>
          </h2>
          <div id="TOC" class="accordion-collapse collapse show" aria-labelledby="TOC" data-bs-parent="#navcordion">
            <div data-content class="accordion accordion-flush" id="navcordion"> </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header text-center" id="Chat">
            <button class="accordion-button collapsed ac-top" type="button" data-bs-toggle="collapse"
              data-bs-target="#Chat-block" aria-expanded="false" aria-controls="Chat-block">
              <small class="lead">Toggle Chat</small>
            </button>
          </h2>

          <div id="Chat-block" class="accordion-collapse collapse" aria-labelledby="Chat"
            data-bs-parent="#navcordion">
            <div style="height: 100%;">
              <iframe width="100%" frameborder="0" allow="microphone; camera" id="chatframe"
                src="https://ucsb.nectir.io/channel/physics6CL" style="min-height: 600px;border: 0;"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>


  </nav>


<!---------------- MAIN CONTENT --------------------->

  <main class="nav-buffer allcontent px-3">

    <!-- TA info Modal -->
    <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="Staff-info-modal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">First Last</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center" id="info-modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             </div>
        </div>
      </div>
    </div>

    

    <!------------ IMPORT MANUAL HERE -------------->
    <div data-toc w3-include-html="showcase" id="maincontent" style="padding-left:auto" onload="includeHTML(linkfile)"></div>
  </main>







</div>
</div>







`



const the_head=`

<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="site: Kelly Ann Pawlak, Ph.D. labs: ILG contributors">
  <meta name="generator" content="Hugo 0.84.0">
  <title>UCSB Physics</title>

  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">

  <!-- Core Markdown Rendering -->
  <script src="static/scripts/markdown-it.min.js"></script>
  <script src="static/scripts/markdown-it-container.min.js"></script>
  <!-- MD Render Loop -->
  <script src="static/scripts/markdown-render.js"></script>
  <script src="static/scripts/markdown-containers.js"></script>
  <!-- The loading of KaTeX -->
  <link rel="stylesheet" href="static/css/katex.min.css">
  <script src="static/scripts/katex.min.js"></script>
  <!-- To automatically render math in text elements, include the auto-render extension: -->
  <script src="static/scripts/auto-render.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
    integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">

  <!-- Symbol to Style Loop -->
  <script src="static/scripts/style-render.js"></script>
  <!-- TOC -->
  <script src="static/scripts/table-of-contents.js"></script>

  <!-- Bootstrap core CSS -->
  <!-- <link href="static/bootstrap/css/bootstrap.min.css" rel="stylesheet"> -->
  <link href="static/css/custom.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="static/css/dashboard.css" rel="stylesheet">
  <link href="static/css/containers.css" rel="stylesheet">



`

const thehead=document.createElement("head")
thehead.innerHTML=the_head

const thebody=document.createElement("body")
thebody.innerHTML=the_body