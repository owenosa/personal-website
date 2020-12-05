console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('blue')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'blue'){
		document.getElementById('theme-style').href = static + '/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = static + '/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = static + '/purple.css'
	}

	if(mode == 'light'){
		document.getElementById('theme-style').href = static + '/default.css'
	}
	localStorage.setItem('theme', mode)
}

let posts = document.querySelectorAll('.hiddenPost');
let hidePostsBtn = document.querySelector('#hidePostsBtn');
let viewMoreBtn = document.querySelector('#viewMoreBtn');

function viewMore(){
	if (viewMoreBtn.textContent === "View More..."){
		viewMoreBtn.addEventListener("click", function(){
			for (i = 0; i < posts.length; i++){
				posts[i].style.display = "block";
			}

			viewMoreBtn.style.display = "none";
			hidePostsBtn.style.display = "block";
		});
	}
}
viewMore();

function hidePosts(){
	if (hidePostsBtn.textContent === "Hide Posts..."){
		hidePostsBtn.addEventListener("click", function(){
			for (i = 0; i < posts.length; i++){
				posts[i].style.display = "none";
			}

			viewMoreBtn.style.display = "block";
			hidePostsBtn.style.display = "none";
		});
	}
}
hidePosts();

