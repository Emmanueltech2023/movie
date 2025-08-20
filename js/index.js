
document.querySelector('.switch-to-register').onclick = function(e) {
    e.preventDefault();
    document.querySelector('.login').classList.remove('active');
    document.querySelector('.register').classList.add('active');
};

document.querySelector('.switch-to-login').onclick = function(e) {
    e.preventDefault();
    document.querySelector('.register').classList.remove('active');
    document.querySelector('.login').classList.add('active');
};

 document.querySelector('.login form').onsubmit = function(e) {
            e.preventDefault();
            localStorage.setItem("loggedIn", "true");
            window.location.href = "movie.html";
        };

        
        document.querySelector('.register form').onsubmit = function(e) {
            e.preventDefault();
            localStorage.setItem("loggedIn", "true");
            window.location.href = "movie.html";
        };
