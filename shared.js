alert("CyberGod Webpage")
var backdrop = document.querySelector(".backdrop");
var Question = document.querySelector(".Question");
var mobile = document.querySelector('.mobile-nav')
var toggle = document.querySelector('.toggle-button')
console.dir(toggle)
console.dir(mobile)
console.dir(backdrop);
console.dir(Question);
// console.log(backdrop);

// backdrop.style.display = "block";
// Question.style.display = 'block';
var selectPlanButtons = document.querySelectorAll('.plan button');
console.dir(selectPlanButtons);
for (var i = 0; i < selectPlanButtons.length; i++) {
   selectPlanButtons[i].addEventListener('click', function() {
        // backdrop.style.display = 'block';
        // Question.style.display = 'block';
        backdrop.classList.add('open')
    })
}
var openToggleButton = document.querySelector('.toggle-button');
console.dir(openToggleButton);
openToggleButton.addEventListener('click', function() {
    mobile.style.display = 'inline-block';
})

// Add event listener to close the mobile nav when clicking outside
document.addEventListener('click', function(event) {
    var isClickInsideMobile = mobile.contains(event.target);
    var isClickOnToggle = toggle.contains(event.target);

    if (!isClickInsideMobile && !isClickOnToggle) {
        mobile.style.display = 'none';
    }
});
