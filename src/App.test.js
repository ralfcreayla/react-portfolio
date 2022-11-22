import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var i = 0;

		var tag = document.getElementById("text");
		var html = document.getElementById("text").innerHTML;
		var attr = tag.setAttribute("data", html);
		var txt = tag.getAttribute("data");
		var speed = 50;

		function typeWriter() {
		  if (i <= txt.length) {
		    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		    
		}

typeWriter();

function sendEmail(){
Email.send({
    SecureToken : "c7c76178-1f49-4246-b80f-1ab1ed4c6b26",
    To : 'ralfcreayla@gmail.com',
    From : document.getElementById("grid7b").value,
    Subject : "New Message from " + document.getElementById("grid7a").value +" from your website",
    Body : document.getElementById("message").value,
}).then(
  message => alert(message)
);
}
