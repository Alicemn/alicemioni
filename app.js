document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    const rightCont = document.getElementById('right-cont');
    const projects = document.querySelectorAll('.project');

    let isScrolling;
    rightCont.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            snapToClosestProject();
            pauseAllVideos();
        }, 150);
    });

    function snapToClosestProject() {
        let closestProject = null;
        let closestDistance = Infinity;

        projects.forEach(project => {
            const rect = project.getBoundingClientRect();
            const distance = Math.abs(rect.top);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestProject = project;
            }
        });

        if (closestProject) {
            closestProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function pauseAllVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            const playButton = video.nextElementSibling;
            const pauseButton = playButton.nextElementSibling;
            playButton.style.display = 'block';
            pauseButton.style.display = 'none';
        });
    }

    projects.forEach((project) => {
        const toggleButton = project.querySelector('.toggleButton');
        const abstractText = project.querySelector('.abstract');
        const carousel = project.querySelector('.img-carousel');
        const elements = project.querySelectorAll('.carousel-img'); // Immagini e video
        const paginationContainer = project.querySelector('.img-pagination');
        
        toggleButton.addEventListener('click', function() {
            if (!toggleButton.classList.contains('active')) {
                var scrollHeight = abstractText.scrollHeight + "px";
                abstractText.style.maxHeight = scrollHeight;
                toggleButton.classList.add('active');
            } else {
                abstractText.style.maxHeight = "66px";
                toggleButton.classList.remove('active');
            }
        });

        elements.forEach((element, index) => {
            let dot = document.createElement('div');
            dot.classList.add('pagination-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => scrollToElement(index));
            paginationContainer.appendChild(dot);
        });

        function scrollToElement(index) {
            const selectedElement = elements[index];
            carousel.scrollLeft = selectedElement.offsetLeft;
            updatePagination(index);
            handleMediaPlayback(selectedElement);
        }

        function handleMediaPlayback(element) {
            const videos = project.querySelectorAll('video');
            videos.forEach(video => video.pause());

            if (element.tagName === 'VIDEO') {
                element.play();
            }
        }

        function updatePagination(index) {
            const dots = project.querySelectorAll('.pagination-dot');
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        carousel.addEventListener('scroll', function () {
            let scrollPosition = carousel.scrollLeft;
            let totalWidth = carousel.scrollWidth - carousel.clientWidth;
            let pageIndex = Math.round((scrollPosition / totalWidth) * (elements.length - 1));
            updatePagination(pageIndex);
            handleMediaPlayback(elements[pageIndex]);
        });
    });

    
});
document.querySelectorAll('.cv-button').forEach(button => {
    button.addEventListener('click', function() {
        let cvCont = button.previousElementSibling; // This assumes the text content is right before the button
        if (!button.classList.contains('active')) {
            cvCont.style.maxHeight = cvCont.scrollHeight + "px"; // Expand to full content height
            button.classList.add('active');
        } else {
            cvCont.style.maxHeight = "0px"; // Collapse to initial state
            button.classList.remove('active');
        }
    });
    
    var videos = document.querySelectorAll("video");

    // Setup Intersection Observer for all videos
    var observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              entry.target.pause();
              console.log("Video paused due to not being in viewport");
            } else {
              entry.target.play();
              console.log("Video played due to being in viewport");
            }
          });
        },
        { threshold: 0.5 }
      );
      // Observe each video
      videos.forEach((video) => observer.observe(video));
      // Pause videos when the page is not visible
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
          videos.forEach((video) => {
            video.pause();
            console.log("Video paused due to visibility change");
          });
        }
      });

      document.addEventListener('click', function(event) {
        // Controlla se l'elemento cliccato è il body o un figlio del body escludendo bottoni e link
        if (event.target === document.body || 
           (event.target.parentNode === document.body && 
            event.target.tagName !== 'BUTTON' && 
            event.target.tagName !== 'A')) {
            document.body.classList.toggle('light-mode');
        }
    });
});

