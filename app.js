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

        const playButtons = project.querySelectorAll('.play-button');
        const pauseButtons = project.querySelectorAll('.pause-button');

        playButtons.forEach(button => {
            const video = button.previousElementSibling;
            button.addEventListener('click', () => {
                video.play();
                button.style.display = 'none';
                button.nextElementSibling.style.display = 'flex';
            });
        });

        pauseButtons.forEach(button => {
            const video = button.previousElementSibling.previousElementSibling;
            button.addEventListener('click', () => {
                video.pause();
                button.style.display = 'none';
                button.previousElementSibling.style.display = 'flex';
            });
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
});