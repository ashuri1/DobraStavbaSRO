$(document).ready(function(){
    $('#menu').click(function(){
        $('#menu').toggleClass('active')
        $('#navbar').toggleClass('open')
    })
    $('.nav-button').click(function(){
        $('#menu').toggleClass('active')
        $('#navbar').toggleClass('open')
    })
})