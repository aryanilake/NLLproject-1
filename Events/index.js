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


document.addEventListener('DOMContentLoaded', function() {
    // Set the maximum word count for each content box
    const maxWordCount = 40;
    
    // Get all content containers
    const contentContainers = document.querySelectorAll('#contentContainerLeft p');
    
    contentContainers.forEach(container => {
        const text = container.textContent;
        const words = text.split(' ');
        
        if (words.length > maxWordCount) {
            // Trim the text to maxWordCount words
            const trimmedText = words.slice(0, maxWordCount).join(' ') + '...';
            container.textContent = trimmedText;
            
            // Ensure there's a "Read More" button (already in your HTML)
        }
        // If text is shorter, it will remain unchanged
    });
});