
// #5 - make the image element appear and disappear when you click the corresponding button
$("#hide").click(function() {
	$("img").hide();
});
$("#show").click(function() {
	$("img").show();
});
// #6 
$("#toggle").click(function() {
	$("img").toggle();
});
// #9
$("#fade").click(function() {
	$("img").toggleClass("fade");
});
// #10 - make the image change to a different image on hover
$("img").hover(function() {
	$("img").attr("src", "http://www.marveldirectory.com/pictures/individuals/s_1d/spiderman1.gif");
});
// #12 - when this button is clicked, add a new list-item with some text content to this unordered list
$("#newStuff").click(function() {
	$("#list").append("<li>some text</li>");
});