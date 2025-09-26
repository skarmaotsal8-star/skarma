// Select the HTML elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// This function will be called when a search is performed
const performSearch = () => {
    // .trim() removes any leading/trailing whitespace
    const query = searchInput.value.trim();

    if (query) {
        // For this demo, we'll just alert the query.
        // In a real application, you would use this query to fetch results.
        alert(`Searching for: "${query}"`);

        // You could also redirect to a search results page:
        // window.location.href = `/search?q=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search term.");
    }
};

// Listen for a click on the search button
searchButton.addEventListener('click', performSearch);

// Listen for the "Enter" key press in the input field
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});
