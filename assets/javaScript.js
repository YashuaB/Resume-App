
$("li").click( function(){
// fading out main elements on home page
  $(".nav-intro-container").fadeOut(1000)
  $(".logo").fadeOut(2000)
  $(".social-icons").fadeOut(1000)

 let id = $(this).attr("id")
  if(id === "about-button"){
    $(".about").css({"margin-top":"0"})
    $(".about").fadeIn(3000)

} else if (id === "contact-button"){
  $(".contact").css({"margin":"0"})
    $(".contact-container").fadeIn(3000)

} else if (id === "work-button"){
  $(".carousel-background").fadeIn(3000)
}
})

$(".close-icon").click( function(){
    
  // $(".closed").css({"display":"none"})
  $(".nav-intro-container").fadeIn(3000)
  $(".logo").fadeIn(3000)
  $(".social-icons").fadeIn(3000)
  $(".closed").fadeOut(2000)
})