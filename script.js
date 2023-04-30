const input_1 = document.getElementsByClassName("input-1")[0];
const input_2 = document.getElementsByClassName("input-2")[0];
const img = document.getElementsByClassName("img")[0];

input_1.addEventListener('click', function (){
    img.src = 'anime straight-modified.png';
});

input_2.addEventListener('click', function (){
    img.src = 'anime closing eyes-modified.png';
});

function showLoader() {
	document.querySelector('.loader-container').style.display = 'block';
}

function hideLoader() {
	document.querySelector('.loader-container').style.display = 'none';
}

showLoader();

// Call the hideLoader function after 3 seconds to simulate a long process
setTimeout(hideLoader, 3000);
