services = function (event) {
    document.getElementById("mainpage").style.display = "none";
    document.getElementById("servicepage").style.display = "block";
    document.getElementById("generalpage").style.display = "none";
    document.getElementById("careerpage").style.display = "none";
    var dd = document.getElementById("ser").classList.add("active-route");
    var ee = document.getElementById("pro").classList.remove("active-route");
    var ff = document.getElementById("car").classList.remove("active-route");
    $(window).scrollTop(0);
    // var dd = document.getElementById("art").classList.remove("active-route");
}
projects = function (event) {
    document.getElementById("mainpage").style.display = "none";
    document.getElementById("servicepage").style.display = "none";
    document.getElementById("generalpage").style.display = "block";
    document.getElementById("careerpage").style.display = "none";
    var dd = document.getElementById("ser").classList.remove("active-route");
    var ee = document.getElementById("pro").classList.add("active-route");
    var ff = document.getElementById("car").classList.remove("active-route");
    $(window).scrollTop(0);
    // var dd = document.getElementById("art").classList.remove("active-route");
}
careers = function (event) {
    document.getElementById("mainpage").style.display = "none";
    document.getElementById("servicepage").style.display = "none";
    document.getElementById("generalpage").style.display = "none";
    document.getElementById("careerpage").style.display = "block";
    var dd = document.getElementById("ser").classList.remove("active-route");
    var ee = document.getElementById("pro").classList.remove("active-route");
    var ff = document.getElementById("car").classList.add("active-route");
    $(window).scrollTop(0);
    // var dd = document.getElementById("art").classList.add("active-route");
}
logo = function (event) {
    document.getElementById("mainpage").style.display = "block";
    document.getElementById("servicepage").style.display = "none";
    document.getElementById("generalpage").style.display = "none";
    document.getElementById("careerpage").style.display = "none";
    var dd = document.getElementById("ser").classList.remove("active-route");
    var ee = document.getElementById("pro").classList.remove("active-route");
    var ff = document.getElementById("car").classList.remove("active-route");
    $(window).scrollTop(0);
    // var dd = document.getElementById("art").classList.add("active-route");
}
blog = function (event) {
    // console.log("Your code");
    return false;
}
// $('#popovershow').on('click', function (e) {

//     // document.getElementById("popp").classList.toggle("popover_show").focus;
//     // e.preventDefault();
// });
var popflag = "1";
$('#popovershow').click(function (e) {
    document.getElementById("popp").classList.toggle("popover_show");
    popflag = "0";
});
$('html').click(function () {
    if (popflag != "0") {
        document.getElementById("popp").classList.remove("popover_show");
    } else {
        // console.log("in");ß
        popflag = "1";
    }
});

poss = function (event) {
    var xr = document.getElementById("lightbig").classList.toggle("rotate");
    var xre = document.getElementById("adapop").classList.toggle("show");
}
mobilemenuopen = function (event) {
    // openmennu
    var x = document.getElementById("mobile-menu");
    var canclexx = document.getElementById("cancelx");
    var openmennuu = document.getElementById("openmennu");
    x.classList.add("show");
    canclexx.style.display = "block";
    openmennuu.style.display = "none";
}
mobilemenuclose = function (event) {
    // openmennu
    var x = document.getElementById("mobile-menu");
    var canclexx = document.getElementById("cancelx");
    var openmennuu = document.getElementById("openmennu");
    x.classList.remove("show");
    canclexx.style.display = "none";
    openmennuu.style.display = "block";
}

// swiperbullet = function (event){
//     // swiper-pagination-bullet-active
// }