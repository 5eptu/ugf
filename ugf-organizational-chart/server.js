const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to simulate fetching member information
app.get('/api/member/:username', (req, res) => {
    const username = req.params.username;

    // Simulated member data
    const memberData = {
        "GeneralUser1": { notes: "Experienced strategist and leader." },
        "GeneralUser2": { notes: "Focuses on operations and logistics." },
        "GeneralUser3": { notes: "Expert in military tactics." },
        "GeneralUser4": { notes: "Coordinates with external forces." },
        "GeneralUser5": { notes: "Oversees training programs." },
        "GeneralUser6": { notes: "Responsible for intelligence gathering." },
        "GeneralUser7": { notes: "Leads special operations." },
        "GeneralUser8": { notes: "Handles public relations." },
        "CaptainUser1": { notes: "Leads Company 1." },
        "LieutenantUser1": { notes: "Assists the captain in operations." },
        "SergeantMajorUser1": { notes: "Advises on enlisted matters." },
        // Add more members as needed
    };

    const member = memberData[username];
    
    if (member) {
        res.json(member);
    } else {
        res.status(404).json({ message: `No information available for ${username}.` });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

