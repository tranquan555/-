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
        section.classList.remove('active', 'fade-in');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active', 'fade-in');
        setTimeout(() => {
            activeSection.classList.remove('fade-in');
        }, 300); // Chỉnh thời gian animation
    }

    // xử lý active state cho navigation links
     const navLinks = document.querySelectorAll('header nav a');
     navLinks.forEach(link => {
        link.classList.remove('active')
        if(link.getAttribute('href') === `#${sectionId}`){
           link.classList.add('active')
        }
     });
}

const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        switchSection(targetId);
    });
});

// Xử lý sự kiện Like/Share buttons
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const isLiked = this.getAttribute('data-liked') === 'true';

      if(isLiked) {
        this.classList.remove('liked')
         this.setAttribute('data-liked', 'false')
      } else {
          this.classList.add('liked');
          this.setAttribute('data-liked', 'true');
      }
      // Thêm code để xử lý thích thật (ví dụ: cập nhật DB) nếu cần
      console.log('Liked button clicked')
    });
});


const shareButtons = document.querySelectorAll('.share-btn');
shareButtons.forEach(button => {
   button.addEventListener('click', function(){
     // Thêm code để xử lý share (ví dụ: mở share dialog) nếu cần
     console.log('Share button clicked');
   });
});

switchSection("home");