// script.js
// Add event listeners to sections to toggle visibility
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('visible');
    });
});

// Add event listeners to "Read more" buttons to expand the content of the sections
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.closest('section');
        section.classList.toggle('expanded');
    });
});

// Add event listeners to navigation links to scroll to the corresponding section
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const section = document.querySelector(link.hash);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listeners to sections to highlight the corresponding navigation link
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => {
        const id = section.id;
        document.querySelector(`nav a[href="#${id}"]`).classList.add('active');

        section.addEventListener('transitionend', () => {
            if (!section.classList.contains('visible')) {
                document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
            }
        });
    });
});

// Get the button element
const button = document.getElementById('change-color');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Get the current background color
  const currentColor = document.body.style.backgroundColor;

  // Generate a new random background color
  const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  // Set the new background color
  document.body.style.backgroundColor = newColor;

  // Update the button text
  button.innerHTML = 'Changed to ' + newColor;
});

