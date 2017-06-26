$(function(){

  let index = 0; // index nous permet de parcourir notre tableau

  setInterval(function(){ // effectue un code en boucle au bout d'un certain temps donné (3000 = 3secs)
    let image = ["https://medias.lequipe.fr/img-photo-jpg/bost-dee/1500000000804658/679:193,1501:740-624-416-75/31ae3.jpg","http://s2.lemde.fr/image/2017/06/22/534x0/5149132_6_e193_frank-ntilikina-fait-face-au-meneur-americain_9996c4b0631aa91edbcd647bdcf40597.jpg","http://img.aws.la-croix.com/2016/11/22/1300805015/meneur-Bleus-Tony-Parker-contre-Espagne-Euro-Basket-17-septembre-2015-Lille_1_1400_2048.jpg"];//variable qui stocke nos images.

  if(index == image.length)// condition pour revenir a la premiere image
  index = 0; // les accolades ne sont pas neccessaire vu qu'il n'y a qu'une instruction

  $("#slide-Charles").attr("src", image[index]);//POINTE l'element id que l'on souhaite pour modifier son attribut , source et image.

  index++;

  }, 3000);

  //*********************************************exercice 2 *****************************
  /*
  $("#Charles-click").click(function(){
      let image = ["http://static.bandainamcogames.eu/sites_products/onepiece/uploads/2016/03/home-logo_en-1-1.png"]
      $("#Charles-click").attr("src", image[index]);
      // $("#Charles-click").attr("src", "adresse de l'image");
  });

  //**********************************************exercice 3******************************
  $(".youhou").click(function(){
    let image = ["http://static.bandainamcogames.eu/sites_products/onepiece/uploads/2016/03/home-logo_en-1-1.png"]
    $(".youhou").attr("src", image[index]);
  }) // si on met des id sur chaque img , on peut copier coller trois fois la fonction click et changer le nom de l'id et le lien de l'img.
  */
  //*******************************************exercice 4***********************************************
   $("#Charles-click").one("click",function(){
    let image = ["http://static.bandainamcogames.eu/sites_products/onepiece/uploads/2016/03/home-logo_en-1-1.png"]
    $("#Charles-click").attr("src", "http://static.bandainamcogames.eu/sites_products/onepiece/uploads/2016/03/home-logo_en-1-1.png");
  }) // si on met des id sur chaque img , on peut copier coller trois fois la fonction click et changer le nom de l'id et le lien de l'img.

  $("#Charles-click1").one("click",function(){
    let image = ["http://www.manga-news.com/public/images/pix/dvd/1909/one-piece-episode-specia-3d2Y-visual.jpg"]
    $("#Charles-click1").attr("src", "http://www.manga-news.com/public/images/pix/dvd/1909/one-piece-episode-specia-3d2Y-visual.jpg" );
  })

  $("#Charles-click2").one("click",function(){
    let image = ["https://s-media-cache-ak0.pinimg.com/736x/8b/c5/64/8bc564903f0aafc7833e7e9dba890ce6.jpg"]
    $("#Charles-click2").attr("src", "https://s-media-cache-ak0.pinimg.com/736x/8b/c5/64/8bc564903f0aafc7833e7e9dba890ce6.jpg");
  });

  $(".one_third").click(function(){
    let image = $("#Charles-click").attr("src"); // je stock la valeur src de la premiere image dans la variable image
    $("#Charles-click").attr("src", $("#Charles-click2").attr("src"));// je modifie le src de la premiere image.
    $("#Charles-click2").attr("src", $("#Charles-click1").attr("src"));
    $("#Charles-click1").attr("src", image);

  });
  /************************exercice 4***********************/


  $(".one_quarter .more > a").click(function(){
    event.preventDefault(); // stop le rechargement de la page et annule l'evenement par default

    console.log($(this)) // balise a selectionner
    console.log($(this).parent()) // balise p class more selectionner
    console.log($(this).parent().parent()) // balise article class one_quarter selectionner
    console.log($(this).parent().parent().children("p")) // balise p  qu'on veux pour modifier le texte

    $(this).parent().parent().children("p").eq(0).append("Charles le roi, longue vie au roi façon Game of Throne !!!");// la fonction eq() permet de parcourir un tableau  en jQuery

  });

  /*****************************exercice 5 ******************************/

  var request = $.ajax({ // envoie d'une requete sur une URL avec une methode
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    dataType: "json" // optionnel definie le type de donnée recu par le serveur.
  });

  request.done(function( users ){ // La fonction done = success - code a effectuer en cas de reussite - reponse en cas de reussite
    var content = "";
  console.log(users);
  for(var i = 0; i < users.length; i++){
    content += '<li><a href="#">'+users[i].name+'</a></li>'
  }
  $("#right_column ul").html(content)

  $("li a").click(function(){
  console.log(users[i].email);

  })

  });

  request.fail(function( jqXHR, textStatus ) { // la fonction fail = erreur de la requete !!
  alert( "Request failed: " + textStatus);
  });






var request2 = $.ajax({
  url:"https://jsonplaceholder.typicode.com/photos",
  method : "GET",
  dataType : "json"
});

request2.done(function(photos){
  console.log(photos);
  for(var i=0; i < 2; i++){
    $("#posts img").eq(i).attr("src", photos[i].url)
  }
  $("figcaption .more  a").click(function(){
    event.preventDefault(); // stop le rechargement de la page et annule l'evenement par default
    for(var i = 0; i < 2; i++){
    if(photos[i].url == $(this).parent().parent().parent().children("img").attr("src")){
    $(this).parent().parent().children("p").append(' Titre : '+photos[i].title);// la fonction eq() permet de parcourir un tableau  en jQuery
    }
    }
});
request.fail(function( jqXHR, textStatus ) { // la fonction fail = erreur de la requete !!
alert( "Request failed: " + textStatus );
});
});




});
