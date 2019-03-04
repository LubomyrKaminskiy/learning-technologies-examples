window.addEventListener('DOMContentLoaded', () => {

	const headerIframe = document.querySelector('#header-iframe');

	const horizontal = document.querySelector('hr');

	const content = document.querySelector('#content');
	
	const btnsBlock = document.querySelector('#buttons-block');

	const btnManifest = document.querySelector('#goto-manifest');
	const btnCourses = document.querySelector('#goto-courses');
	const btnProjects = document.querySelector('#goto-projects');
	const btnSkills = document.querySelector('#goto-skills');
	const btnContacts = document.querySelector('#goto-contacts');

	const footerBack = document.querySelector('#footer-back');


	btnManifest.addEventListener('click', () => { changePage('/components/manifest.html'); });
	btnCourses.addEventListener('click', () => { changePage('/components/courses.html'); });
	btnProjects.addEventListener('click', () => { changePage('/components/projects.html'); });
	btnSkills.addEventListener('click', () => { changePage('/components/skills.html'); });
	btnContacts.addEventListener('click', () => { changePage('/components/contacts.html'); });

	footerBack.querySelector('button').addEventListener('click', () => { 
		//headerIframe.className = "flex-header";
		//btnsBlock.className = "flex-container";

		headerIframe.style.display = "flex";
		btnsBlock.style.display = "flex";

		content.src = '/';

		content.style.display = "none";
		// content.style.height = "100vh"; 
		//content.style.flex = "1 1 auto";
		footerBack.style.display = "none";
	});

	function changePage(url) {
		headerIframe.style.display = "none";

		horizontal.style.marginTop = "5px";
		horizontal.style.marginBottom = "5px";

		btnsBlock.style.display = "none";

		content.src = url;

		content.style.display = "block";
		content.style.height = "98vh";
		// content.style.height = "100vh"; 
		content.style.flex = "1 1 auto";
		footerBack.style.display = "block";
	}
});


