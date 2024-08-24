console.log ("Welcome to Nathalia's Portfolio.");
function menuToggle(){
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle'){
        x.className += ' responsive';
    } else{
        x.className = 'navtoggle';
    }
}