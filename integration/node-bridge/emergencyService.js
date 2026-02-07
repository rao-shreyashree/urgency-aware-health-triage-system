// integration/node-bridge/emergencyService.js

const dispatchAmbulance = async (patientData) => {
    console.log(`🚨 [DISPATCH] Alerting nearest hospital for: ${patientData.name}`);
    // In a real app, this would call a Hospital API or Twilio
    return { status: "Dispatched", eta: "5-10 mins" };
};

const notifyEmergencyContacts = async (contacts) => {
    console.log(`📱 [SMS] Notifying family: "Emergency detected. Location shared."`);
    return { status: "Sent" };
};

module.exports = { dispatchAmbulance, notifyEmergencyContacts };