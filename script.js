document.addEventListener('DOMContentLoaded', function () {
    const fetchVerseButton = document.getElementById('fetchVerse');
    const verseContainer = document.getElementById('verse');

    fetchVerseButton.addEventListener('click', () => {
        fetch('https://bhagavadgita.io/api/v1/gita')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const verseText = data?.data?.[0]?.verse;
                if (verseText) {
                    verseContainer.textContent = verseText;
                } else {
                    verseContainer.textContent = 'Verse not found';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                verseContainer.textContent = 'An error occurred while fetching the verse.';
            });
    });
});