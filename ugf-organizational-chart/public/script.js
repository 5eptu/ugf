// Simulated member data (In real implementation, replace with API calls to your Discord bot)
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
    "Sergeant1User": { notes: "Leads Squad 1." },
    "Corporal1User": { notes: "Assists the sergeant." },
    "Member1User": { notes: "A dedicated squad member." },
    "CaptainUser2": { notes: "Leads Company 2." },
    "LieutenantUser2": { notes: "Assists the captain in operations." },
    "SergeantMajorUser2": { notes: "Advises on enlisted matters." },
    "Sergeant2User": { notes: "Leads Squad 2." },
    "Corporal2User": { notes: "Assists the sergeant." },
    "Member2User": { notes: "A dedicated squad member." },
    "CaptainUser3": { notes: "Leads Company 3." },
    "LieutenantUser3": { notes: "Assists the captain in operations." },
    "SergeantMajorUser3": { notes: "Advises on enlisted matters." },
    "Sergeant3User": { notes: "Leads Squad 3." },
    "Corporal3User": { notes: "Assists the sergeant." },
    "Member3User": { notes: "A dedicated squad member." },
    "CaptainUser4": { notes: "Leads Company 4." },
    "LieutenantUser4": { notes: "Assists the captain in operations." },
    "SergeantMajorUser4": { notes: "Advises on enlisted matters." },
    "Sergeant4User": { notes: "Leads Squad 4." },
    "Corporal4User": { notes: "Assists the sergeant." },
    "Member4User": { notes: "A dedicated squad member." },
    "Sergeant5User": { notes: "Leads Squad 5." },
    "Corporal5User": { notes: "Assists the sergeant." },
    "Member5User": { notes: "A dedicated squad member." },
    "Sergeant6User": { notes: "Leads Squad 6." },
    "Corporal6User": { notes: "Assists the sergeant." },
    "Member6User": { notes: "A dedicated squad member." },
    "Sergeant7User": { notes: "Leads Squad 7." },
    "Corporal7User": { notes: "Assists the sergeant." },
    "Member7User": { notes: "A dedicated squad member." },
    "Sergeant8User": { notes: "Leads Squad 8." },
    "Corporal8User": { notes: "Assists the sergeant." },
    "Member8User": { notes: "A dedicated squad member." },
    "Sergeant9User": { notes: "Leads Squad 9." },
    "Corporal9User": { notes: "Assists the sergeant." },
    "Member9User": { notes: "A dedicated squad member." },
    "Sergeant10User": { notes: "Leads Squad 10." },
    "Corporal10User": { notes: "Assists the sergeant." },
    "Member10User": { notes: "A dedicated squad member." },
    "Sergeant11User": { notes: "Leads Squad 11." },
    "Corporal11User": { notes: "Assists the sergeant." },
    "Member11User": { notes: "A dedicated squad member." },
    "Sergeant12User": { notes: "Leads Squad 12." },
    "Corporal12User": { notes: "Assists the sergeant." },
    "Member12User": { notes: "A dedicated squad member." },
};

// Function to fetch and display member information
function fetchMemberInfo(username) {
    const member = memberData[username];
    
    if (member) {
        // Display member information (using alert for simplicity)
        alert(`${username} Info:\nNotes: ${member.notes}`);
    } else {
        alert(`No information available for ${username}.`);
    }
}
