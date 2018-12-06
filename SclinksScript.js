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
$(".post-body div").attr("style","display:none;").html("");
}

//Function virifieInfo
function verifieInfo(ad1link,ad1img,linkShortedval,linkimg,linktitle,ad2link,ad2img)
{
  
if(linkimg === linkShortedval)
{
  linkShortedval = null;
  console.warn("#ERROR10: {LinkShorted: Image link and ad link are similar!}")
}
  
if(linkShortedval != null)
{
//verifie PostInfo
if(linkimg == null || typeof linkimg === "undefined")
{
linkimg = "#ImgNotfoundLink" ;
console.warn("#ERROR03: {Post Image : not found !}")
}

if(linktitle == null || typeof linktitle === "undefined")
{
linktitle = "Your link will be processed here !";
console.warn("#ERROR04: {Post Title : not found !}")
}
if(ad1link === ad1img)
{
  ad1link = null;
  ad1img = null;
  console.warn("#ERROR09: {Ad1Link : Image link and ad link are similar!}")
}
  
if(ad2link === ad2img)
{
  ad2link = null;
  ad2img = null;
  console.warn("#ERROR09: {Ad2Link : Image link and ad link are similar!}")
}
//verifie Ad1Info
if(ad1link == null || typeof ad1link === "undefined")
{
ad1link = "#MyAd1Link" ;
console.warn("#ERROR05: {Ad1Link : not found !}")
}

if(ad1img == null || typeof ad1img === "undefined")
{
ad1img = "https://bit.ly/2E1NpIk";
console.warn("#ERROR06: {Ad1Image : not found !}")
}

//verifie Ad2Info
if(ad2link == null || typeof ad2link === "undefined")
{
ad2link = "#MyAd2Link" ;
console.warn("#ERROR07: {Ad2Link : not found !}")
}

if(ad2img == null || typeof ad2img === "undefined")
{
ad2img = "https://bit.ly/2E1NpIk";
console.warn("#ERROR08: {Ad2Image : not found !}")
}

creatPost(ad1link,ad1img,linkShortedval,linkimg,linktitle,ad2link,ad2img);

}
else
{
console.warn("#ERROR02: {Shoted Link : not found !}");
$(".post-body div").attr("style","display:none;").html("");
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
$(".post-body div").html("").append($("<div>").attr("id","newPost"));
  
//Creat list for ads
$("<ul>").attr({"id":"postBod","class": "styleAds1"}).appendTo('#newPost');

//Add Ad1 to list
$("<li>").appendTo('ul#postBod').append( $("<a>").attr({"id":"Ads8","href": ad1link}));
$("<img>").attr("src",ad1img).appendTo('a#Ads8');

/*Add LinkShorted & her infos to list*/

$("<li>").attr({"id":"sclink","style":"background: transparent url("+linkimg+") no-repeat scroll center center / cover;"}).appendTo("ul#postBod");
$("li#sclink").append($("<p>").attr("id","postitle").text(linktitle));
$("li#sclink").append($("<a>").attr("id","linkShorted"));

//Add Ad2 to list
$("<li>").appendTo('ul#postBod').append( $("<a>").attr({"id":"Ads9","href": ad2link}));
$("<img>").attr("src",ad2img).appendTo('a#Ads9');

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
