$(".hamburger").click(function () {
    $("#filtro").fadeIn()
    $("#filtro").css("background-color", "rgba(51, 51, 51, 0.4)")
    $(".menu-mobile").css("left", "0vw")
    $(".menu-mobile").css("opacity", "1")    
});

$(".hamburger-close, .home, .download, .como-funciona, .time, .viajante, .solicitante").click(function () {
    $("#filtro").css("background-color", "rgba(51, 51, 51, 0.0)")
    $("#filtro").fadeOut()
    $(".menu-mobile").css("opacity", "0")
    $(".menu-mobile").css("left", "-100vw")
});

var nav = $('.cabecalho-desktop');

$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        nav.addClass("fixar");
    } else {
        nav.removeClass("fixar");
    }
});

$('.scroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2500);
            return false;
        }
    }
});

$(".mais").click(function (e) {
    $(this).hide();
    $(this.parentElement.children[1]).css("display", "flex");
    $(this.parentElement.parentElement.parentElement.children[1]).css("opacity", "1");
    $(this.parentElement.parentElement.parentElement.children[1]).css("padding-top", "2.5rem");
    $(this.parentElement.parentElement.parentElement.children[1]).css("max-height", "60rem");
});

$(".menos").click(function () {
    $(this).hide();
    $(this.parentElement.children[0]).css("display", "flex");
    $(this.parentElement.parentElement.parentElement.children[1]).css("max-height", "0");
    $(this.parentElement.parentElement.parentElement.children[1]).css("padding-top", "0");
    $(this.parentElement.parentElement.parentElement.children[1]).css("opacity", "0");
});

