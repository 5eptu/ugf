// Importing required modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS and JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to get member details
app.get('/member/:username', (req, res) => {
    const username = req.params.username;
    
    // Here you would ideally fetch member data from a database or a JSON file
    // For demonstration purposes, we'll use a sample data structure
    const members = {
        "user1": {
            "rank": "General",
            "notes": "Leads the operations and strategy."
        },
        "user2": {
            "rank": "Captain",
            "notes": "Responsible for the company’s administration."
        },
        "user3": {
            "rank": "Sergeant",
            "notes": "Manages the squads and their activities."
        }
    };

    const memberData = members[username];

    if (memberData) {
        res.json(memberData);
    } else {
        res.status(404).json({ message: "Member not found." });
    }
});

// Endpoint to add a new member (for future expansion)
app.post('/add-member', (req, res) => {
    const { username, rank, notes } = req.body;

    // Ideally, you would save this data to a database or a file
    // For demonstration purposes, let's just log it to the console
    console.log(`New Member Added: ${username}, Rank: ${rank}, Notes: ${notes}`);

    // Respond with a success message
    res.json({ message: "Member added successfully!" });
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Helper function to read member data from a JSON file
function readMembersFromFile() {
    const filePath = path.join(__dirname, 'members.json');
    
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }
    return {};
}

// Helper function to write member data to a JSON file
function writeMembersToFile(members) {
    const filePath = path.join(__dirname, 'members.json');
    fs.writeFileSync(filePath, JSON.stringify(members, null, 2), 'utf8');
}

// Function to initialize members data file if it doesn't exist
function initializeMembersFile() {
    const filePath = path.join(__dirname, 'members.json');
    
    if (!fs.existsSync(filePath)) {
        const initialData = {
            "user1": {
                "rank": "General",
                "notes": "Leads the operations and strategy."
            },
            "user2": {
                "rank": "Captain",
                "notes": "Responsible for the company’s administration."
            },
            "user3": {
                "rank": "Sergeant",
                "notes": "Manages the squads and their activities."
            }
        };

        writeMembersToFile(initialData);
    }
}

// Initialize the members file on server start
initializeMembersFile();
