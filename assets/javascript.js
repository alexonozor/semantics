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
blog = function (event) {
    // console.log("Your code");
    return false;
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

 
// $("#toDoList").on('click', 'p', function() {
//     $(this).remove();
//   });
// });
