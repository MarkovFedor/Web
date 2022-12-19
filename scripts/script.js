function myFunc(input) {
        
    var files = input.files || input.currentTarget.files;

    var reader = [];
    var images = document.getElementById('images');
    var name;
    for (var i in files) {
        if (files.hasOwnProperty(i)) {
            name = 'file' + i;
            
            reader[i] = new FileReader();
            reader[i].readAsDataURL(input.files[i]);
            
            images.innerHTML += '<img class="selling-image" id="'+ name +'" src="" />';
            
            (function (name) {
                reader[i].onload = function (e) {
                    console.log(document.getElementById(name));
                    document.getElementById(name).src = e.target.result;
                };
            })(name);
            
            
            console.log(files[i]);
        }
    }
    return files;
}



let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
    console.log("worked");
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

