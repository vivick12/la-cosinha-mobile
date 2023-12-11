document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.carousel-container');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function updateCarousel() {
        currentIndex = (currentIndex + 1) % indicators.length;
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    setInterval(updateCarousel, 3000);

    document.querySelectorAll('.carousel-item').forEach((item, index) => {
        item.addEventListener('click', function () {
            // Substitua 'SEU_LINK_AQUI' pelo URL real para o qual deseja direcionar
            window.location.href = 'SEU_LINK_AQUI';
        });
    });
});
