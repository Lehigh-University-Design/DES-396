document.onreadystatechange = function(event) {

	if (document.readyState === "complete") {

		console.log('ss');

		function detectColorScheme(){
			var theme='light';
			const local_theme = localStorage.getItem('theme');
			console.log(local_theme);

			if(local_theme == 'dark' ) {
				theme = 'dark';
			} else if(local_theme == 'light' ) {
			  theme = 'light';
			} else if( window.matchMedia("(prefers-color-scheme: dark)") ) {
				theme = 'dark';
			} else if( window.matchMedia("(prefers-color-scheme: light)") ) {
				theme = 'light';
			}

			if(theme == 'dark') {
				console.log('dark');
				document.documentElement.classList.add('dark');
      			document.documentElement.classList.remove('light');
			} else if(theme == 'light') {
				console.log('light');
				document.documentElement.classList.add('light');
				document.documentElement.classList.remove('dark');
			}

		}

		detectColorScheme();

		const toggleDarkMode = document.querySelector('.js-toggle-dark-mode'); 
		const dk = '<span class="material-symbols-outlined">dark_mode</span>';
		const lt = '<span class="material-symbols-outlined">light_mode</span>';

		jtd.addEvent(toggleDarkMode, 'click', function(){

			toggleDarkMode.classList.toggle('dark');

			if(toggleDarkMode.classList.contains('dark')) {
				console.log('dark -');
				localStorage.setItem('theme', 'dark');
	        	document.documentElement.classList.add('dark');
      			document.documentElement.classList.remove('light');
	        	toggleDarkMode.innerHTML = dk;
	      } else {
	      	console.log('light -');
	      	localStorage.setItem('theme', 'light');
	        document.documentElement.classList.add('light');
				document.documentElement.classList.remove('dark');
	        toggleDarkMode.innerHTML = lt; 
	      }

		});

		if ( document.documentElement.classList.contains('dark') ){
			toggleDarkMode.innerHTML = lt; 
		} else if ( document.documentElement.classList.contains('light') ){
			toggleDarkMode.innerHTML = dk; 
		}

	}
};