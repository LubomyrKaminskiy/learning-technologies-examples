window.addEventListener('DOMContentLoaded', () => {

	 courcesHoverPreview();
});

function courcesHoverPreview(){
	const preview = document.querySelector('#course-profile-preview');

	const htmlacademy = document.querySelector('#courses-htmlacademy');
	const codeacademy = document.querySelector('#courses-codeacademy');
	const sololearn = document.querySelector('#courses-sololearn');

	htmlacademy.addEventListener('mouseover', () => { 
		
		preview.style.backgroundImage = "url('/images/course-preview/htmlacademy.png')";
		//preview.style.background = "center";

	}); //'https://htmlacademy.ru/profile/id804535''https://example.com'

	codeacademy.addEventListener('mouseover', () => { 
		preview.style.backgroundImage = "url('/images/course-preview/codeacademy.png')";
	});

	sololearn.addEventListener('mouseover', () => { 
		preview.style.backgroundImage = "url('/images/course-preview/sololearn.png')";
	});
};
//iframe.src = getDocumentPassCORS(url);
// function getDocumentPassCORS(url) {

// 	let anonymizer1 = 'http://arne-post.de/?q=';
// 	let base64url = btoa(url);

// 	let anonymizer2 = 'https://bg-proxy.netmap.su/browse.php?u=';
// 	let url2 = url;

// 	return anonymizer2 + url2;
// }