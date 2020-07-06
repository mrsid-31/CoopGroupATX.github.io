
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/aboutcoopgroup",
    "title": "About CoopGroup",
    "body": "So what is CoopGroup: Suprise! Suprise! Coding is difficult and sometimes can be boring, but what if we can can change that. The way to change the perspective on coding is to have fun with it! We hear at CoopGroup, belive you shouldn’t pay to learn to code. In fact it is a skill that all people will most likely need in the future as this world evolves. "
    }, {
    "id": 2,
    "url": "/dates",
    "title": "Dates",
    "body": "       Customizing Discord Completed   We used BandagedBD to customize discord with awesome themes and plugins.          Front-end Web Development Completed   We learned the basics of Web Development with HTML, CSS, and Javascript          Self Driving Minuture Car Programming Completed   Students use Auto-Auto AI cars to learn python.          Otto Coding Completed   Programing 3D printed robots (complete).    "
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "   Sign-up today! "
    }, {
    "id": 4,
    "url": "/our-team",
    "title": "Our Team",
    "body": "{% for author in site. authors %}     {% if author. avatar %}      {% else %}      {% endif %}      &lt;a target= _blank  {% if author. web %} href= {{ author. web }}  style= color : #133DFF; {% endif %}&gt;About {{ author. name }}&lt;/a&gt;:    {% if author. role %}{{ author. role }} {% endif %}   {% if author. email %}{% endif %}   {% if author. github %}{% endif %}   {% if author. twitter %}{% endif %}   {% if author. instagram %}{% endif %}       {% if author. youtube %}{% endif %}    {{ author. description }}       {% endfor %} "
    }, {
    "id": 5,
    "url": "/sign-up",
    "title": "Sign Up",
    "body": "  "
    }, {
    "id": 6,
    "url": "/support-us",
    "title": "Support Us",
    "body": "If you would like to support the growth and devlopment of CoopGroup Robotics (thank you!!) please do so on the platforms below: {% if site. patreon %} Patreon: Become a patron and get cool perks when you come to CoopGroup! Go there -&gt; {% endif %} {% if site. teespring %} Teespring (CoopGroup Merchandise): Want a CoopGroup teeshirt or two? Want other cool stuff? Grab some at the CoopGroup Teespring store! Go there -&gt; {% endif %} Or just spread the word about CoopGroup!: "
    }, {
    "id": 7,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, ];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});