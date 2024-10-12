// Function to fetch member details from the Discord bot
async function fetchMemberDetails(username) {
    try {
        // Replace with your bot's API endpoint
        const response = await fetch(`http://localhost:3000/member/${username}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const memberDetails = await response.json();
        displayMemberDetails(memberDetails);
    } catch (error) {
        console.error('There was a problem fetching member details:', error);
        alert('Failed to fetch member details. Please try again later.');
    }
}

// Function to display member details
function displayMemberDetails(memberDetails) {
    const detailsContainer = document.getElementById('member-details');
    detailsContainer.innerHTML = `
        <h3>${memberDetails.username}</h3>
        <p><strong>Rank:</strong> ${memberDetails.rank}</p>
        <p><strong>Notes:</strong> ${memberDetails.notes}</p>
    `;
    detailsContainer.style.display = 'block';
}

// Add event listeners to all squad members
document.querySelectorAll('.squad-member').forEach(member => {
    member.addEventListener('click', () => {
        const username = member.getAttribute('data-username');
        fetchMemberDetails(username);
    });
});

// Optional: Hide the member details initially
const detailsContainer = document.createElement('div');
detailsContainer.id = 'member-details';
detailsContainer.style.display = 'none';
detailsContainer.style.border = '1px solid #ccc';
detailsContainer.style.padding = '10px';
detailsContainer.style.marginTop = '10px';
document.body.appendChild(detailsContainer);
