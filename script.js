console.log("Website initialized!");

function loadFiles() {
    fetch('files.txt')
        .then(response => response.text())
        .then(text => {
            const fileList = document.getElementById('file-list');
            const links = text.trim().split('\n');
            links.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link;
                a.textContent = link;
                a.target = "_blank";
                li.appendChild(a);
                fileList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching files:', error));
}

loadFiles();

function switchSection(sectionId) {
    const sections = document.querySelectorAll('.site-section');
    sections.forEach(section => {
        section.classList.remove('active', 'fade-in'); // remove class
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active', 'fade-in'); // Thêm class animation
         setTimeout(() => {
                activeSection.classList.remove('fade-in');
            }, 500);
    }
}

const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        switchSection(targetId);
    });
});

switchSection("home");