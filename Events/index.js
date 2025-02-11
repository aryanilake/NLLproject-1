document.addEventListener("DOMContentLoaded", () => {

    const blocks = document.querySelectorAll(".timeline-block");

    const checkBlocks = () => {

        const triggerBottom = window.innerHeight * 1;

        blocks.forEach(block => {

            const blockTop = block.getBoundingClientRect().top;

            if (blockTop < triggerBottom) {

                block.classList.add("show");

            }

        });

    };

    window.addEventListener("scroll", checkBlocks);

    checkBlocks(); // Run on page load

}); 