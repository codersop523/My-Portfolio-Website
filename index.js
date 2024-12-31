
  // Get all the nav links
  const navLinks = document.querySelectorAll('.nav-link');

  // Add a click event listener to each nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Remove the 'active' class from all nav links
      navLinks.forEach(link => link.classList.remove('active'));
      // Add the 'active' class to the clicked link
      this.classList.add('active');
    });
  });

