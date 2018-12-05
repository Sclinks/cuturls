$(function() {

var post = $(".post-body div").find("div#newPost");

if(post.length != 0)
{
//GlobVars
var linkShortedobj = (post.find("a").eq(0).length != 0)?post.find("a").eq(0): 					post.find("h2").eq(0).find("a").eq(0);
var ad1 = (post.find("a").eq(1).length != 0) ?post.find("a").eq(1) :post.find("h2").eq(1).find("a").eq(0);
var ad2 = (post.find("a").eq(2).length != 0) ?post.find("a").eq(2) :post.find("h2").eq(2).find("a").eq(0);

/*####################*/

//Ad1 info
var ad1link = ad1.attr("href");
var ad1img = ad1.find("img").attr("src");

//Ad2 info
var ad2link = ad2.attr("href");
var ad2img = ad2.find("img").attr("src");

//PostInfo
var linkShortedval = linkShortedobj.attr("href");
var linkimg = linkShortedobj.find("img").eq(0).attr("src");
var linktitle = post.find("h3").eq(0).text();

verifieInfo(ad1link,ad1img,linkShortedval,linkimg,linktitle,ad2link,ad2img);
}
else
{
console.warn("#ERROR01: {div#newPost : not found !}")
//window.location.href = "/p/accueil.html";
}

function verifieInfo(ad1link,ad1img,linkShortedval,linkimg,linktitle,ad2link,ad2img)
{
if(linkShortedval != null)
{
//verifie PostInfo
if(linkimg == null)
{
linkimg = "#ImgNotfoundLink" ;
console.log("#ERROR03: {Post Image : not found !}")
}
else if(linktitle == null)
{
linktitle = "Your link will be processed here !";
console.log("#ERROR04: {Post Title : not found !}")
}

//verifie Ad1Info
if(ad1link == null)
{
ad1link = "#MyAd1Link" ;
console.log("#ERROR05: {Ad1Link : not found !}")
}
else if(ad1img == null)
{
ad1img = "https://bit.ly/2E1NpIk";
console.log("#ERROR06: {Ad1Image : not found !}")
}

//verifie Ad2Info
if(ad2link == null)
{
ad2link = "#MyAd2Link" ;
console.log("#ERROR07: {Ad2Link : not found !}")
}
else if(ad2img == null)
{
ad2img = "https://bit.ly/2E1NpIk";
console.log("#ERROR08: {Ad2Image : not found !}")
}

creatPost(ad1link,ad1img,linkShortedval,linkimg,linktitle,ad2link,ad2img);

}
else
{
console.log("#ERROR02: {Shoted Link : not found !}");
//window.location.href = "/p/accueil.html";
}
}


function creatPost(ad1link,ad1img,linkShortedval,linkimg,linktitle,ad2link,ad2img)
{
var cdaud = new Audio();
cdaud.src = "https://raw.githubusercontent.com/Sclinks/cuturls/master/SclinksTimer.mp3";

var timeLeft = 15;
var timerId = setInterval(countdown, 1000);

//Clear Post Div  
$('div#newPost').html("");

//Creat list for ads
$("<ul>").attr({"id":"postBod","class": "styleAds1"}).appendTo('#newPost');

//Add Ad1 to list
$("<li>").appendTo('ul#postBod').append( $("<a>").attr({"id":"Ads8","href": ad1link+""}));
$("<img>").attr("src",ad1img+"").appendTo('a#Ads8');

/*Add LinkShorted & her infos to list*/

$("<li>").attr({"id":"sclink","style":"background: transparent url("+linkimg+") no-repeat scroll center center / cover;"}).appendTo("ul#postBod");
$("li#sclink").append($("<p>").attr("id","postitle").text(linktitle));
$("li#sclink").append($("<a>").attr("id","linkShorted"));

//Add Ad1 to list
$("<li>").appendTo('ul#postBod').append( $("<a>").attr({"id":"Ads9","href": ad2link+""}));
$("<img>").attr("src",ad2img+"").appendTo('a#Ads9');

$("<span>").attr("class","icon-spin4 animate-spin").appendTo("a#linkShorted");
$("<span>").attr("id","Timer").appendTo("a#linkShorted");

var getLink = $("<span>").attr("class","icon-right-hand").text("Get Link").append($("<span>").attr("class","icon-link"));


function countdown() {
if(timeLeft <= 10)
{
cdaud.play();

if (timeLeft == 0) {

clearTimeout(timerId);
$("#linkShorted").attr("href", linkShortedval).html(getLink);

} else {
$("#Timer").html(timeLeft+"s");
timeLeft--;
}
}
else{timeLeft--;}
}

}

});
