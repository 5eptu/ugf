// highcommand/api/missions.js

let missions = []; // This array will hold the mission data

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Send back the current missions
        res.status(200).json(missions);
    } else if (req.method === 'POST') {
        // Add a new mission
        const newMission = req.body; // Get the mission data from the request
        
        // Check if required fields are present
        if (!newMission.name || !newMission.description || !newMission.status) {
            return res.status(400).json({ message: 'Name, description, and status are required.' });
        }
        
        // Push the new mission into the missions array
        missions.push(newMission); 
        res.status(201).json(newMission); // Respond with the new mission
    } else {
        // Method not allowed
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
