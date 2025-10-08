import React from "react";
import CategoryDropdown from "./CategoryDropdown";

export function ServicesDropdown() {
  return (
    <CategoryDropdown
      sectionsData={servicesData.sections}
      contentData={servicesData.content}
      mainTitle="Services"
      showLeftSection={true}
    />
  );
}

export function IndustriesDropdown() {
  return (
    <CategoryDropdown
      sectionsData={industriesData.sections}
      contentData={industriesData.content}
      mainTitle="Industries"
      showLeftSection={true}
    />
  );
}

export function ProductsDropdown() {
  return (
    <CategoryDropdown
      sectionsData={productsData.sections}
      contentData={productsData.content}
      mainTitle="Products"
      showLeftSection={false}
    />
  );
}

const servicesData = {
  sections: [
    { id: "immersive-transformations", title: "Immersive Transformations" },
    { id: "ai-innovations", title: "AI Innovations" },
    { id: "ar-vr-mixed", title: "AR VR & Mixed Reality Solutions" },
    { id: "metaverse", title: "Metaverse & Virtual Ecosystems" },
    { id: "digital-twins", title: "Digital Twins & Spatial Computing" },
    { id: "gamification", title: "Gamification" },
    { id: "blockchain-development", title: "Blockchain Development" },
    { id: "staff-augmentation", title: "Staff Augmentation" },
  ],
  content: {
    "immersive-transformations": {
      title: "Immersive Transformations",
      items: [
        { title: "Events", description: "Transformative Event Solutions that enhance engagement." },
        { title: "Education & Training", description: "Innovative education and training solutions that leverage immersive technologies." },
        { title: "Sports", description: "Revolutionizing sports training with immersive experiences." },
        { title: "Tourism & Hospitality", description: "Engaging experiences & tailored training for hospitality growth." },
        { title: "Immersive Transformations", description: "Engaging experiences that redefine learning and growth." },
        { title: "Real Estate", description: "Transforming real estate training through immersive experiences." },
      ],
    },
    "ai-innovations": {
      title: "AI Innovations",
      items: [
        { title: "Machine Learning Solutions", description: "Advanced ML algorithms for enhanced user experiences." },
        { title: "Natural Language Processing", description: "Intelligent NLP systems for better human-computer interaction." },
        { title: "Computer Vision", description: "AI-powered visual recognition and analysis systems." },
        { title: "Predictive Analytics", description: "Data-driven insights for strategic decision making." },
        { title: "AI Automation", description: "Intelligent automation solutions for business processes." },
        { title: "Neural Networks", description: "Deep learning solutions for complex problem solving." },
      ],
    },
    "ar-vr-mixed": {
      title: "AR VR & Mixed Reality Solutions",
      items: [
        { title: "Virtual Reality Experiences", description: "Immersive VR solutions for training and entertainment." },
        { title: "Augmented Reality Apps", description: "Interactive AR applications for mobile and web platforms." },
        { title: "Mixed Reality Platforms", description: "Hybrid solutions combining real and virtual environments." },
        { title: "360° Content Creation", description: "Professional 360-degree video and interactive content." },
        { title: "VR Training Simulations", description: "Realistic training environments for skill development." },
        { title: "AR Marketing Solutions", description: "Engaging AR experiences for brand promotion." },
      ],
    },
    "metaverse": {
      title: "Metaverse & Virtual Ecosystems",
      items: [
        { title: "Virtual World Development", description: "Custom virtual worlds and metaverse environments." },
        { title: "Avatar Creation Systems", description: "Advanced avatar design and customization platforms." },
        { title: "Virtual Commerce", description: "E-commerce solutions for virtual environments." },
        { title: "Social VR Platforms", description: "Interactive social experiences in virtual spaces." },
        { title: "Blockchain Integration", description: "Web3 and blockchain solutions for virtual assets." },
        { title: "Virtual Event Spaces", description: "Scalable virtual venues for events and conferences." },
      ],
    },
    "digital-twins": {
      title: "Digital Twins & Spatial Computing",
      items: [
        { title: "IoT Digital Twins", description: "Real-time digital replicas of physical systems." },
        { title: "3D Mapping Solutions", description: "Advanced spatial mapping and visualization tools." },
        { title: "Spatial Analytics", description: "Location-based data analysis and insights." },
        { title: "Smart City Solutions", description: "Digital twin technology for urban planning." },
        { title: "Industrial Monitoring", description: "Real-time monitoring of industrial processes." },
        { title: "Geospatial Intelligence", description: "Advanced geospatial data processing and analysis." },
      ],
    },
    "gamification": {
      title: "Gamification",
      items: [
        { title: "Game-Based Learning", description: "Educational platforms that use gamification to improve engagement." },
        { title: "Loyalty Programs", description: "Reward-driven systems to boost customer engagement and retention." },
        { title: "Employee Engagement Tools", description: "Gamified platforms to motivate and engage teams." },
        { title: "Gamified Marketing Campaigns", description: "Interactive campaigns to drive brand interaction." },
      ],
    },
    "blockchain-development": {
      title: "Blockchain Development",
      items: [
        { title: "Smart Contracts", description: "Automated, secure, and transparent digital agreements." },
        { title: "Decentralized Apps (dApps)", description: "Custom blockchain applications for various industries." },
        { title: "NFT Marketplaces", description: "Build platforms for creating, selling, and trading NFTs." },
        { title: "Crypto Wallet Solutions", description: "Secure digital wallet development for crypto transactions." },
      ],
    },
    "staff-augmentation": {
      title: "Staff Augmentation",
      items: [
        { title: "Dedicated Developers", description: "On-demand skilled developers to scale your team." },
        { title: "Project-Based Augmentation", description: "Specialized staff for short-term or long-term projects." },
        { title: "Remote Tech Teams", description: "Build and manage remote teams for flexible operations." },
        { title: "Expert Consulting", description: "Hire industry experts to bridge skill gaps in your organization." },
      ],
    },
  },
};

const industriesData = {
  sections: [
    { id: "healthcare", title: "Healthcare", isActive: true },
    { id: "real-estate", title: "Real Estate", isActive: false },
    { id: "events", title: "Events", isActive: false },
    { id: "immersive-transformation", title: "Immersive Transformation", isActive: false },
    { id: "education-training", title: "Education and Training", isActive: false },
    { id: "entertainment", title: "Entertainment", isActive: false },
    { id: "defence", title: "Defence", isActive: false },
  ],
  content: {
    healthcare: {
      title: "Healthcare",
      items: [
        { title: "AI Innovations", description: "Innovations in artificial intelligence for enhanced experiences" },
        { title: "AR VR & Mixed Reality Solutions", description: "Augmented reality, virtual reality, and mixed reality solutions" },
        { title: "Metaverse & Virtual Ecosystems", description: "Exploring the metaverse and building virtual ecosystems" },
        { title: "Digital Twins & Spatial Computing", description: "Creating digital twins and advancing spatial computing technologies" },
        { title: "Staff Augmentation", description: "Exceptional talent acquisition for your business growth needs" },
      ],
    },
    "real-estate": {
      title: "Real Estate",
      items: [
        { title: "Virtual Property Tours", description: "Immersive virtual reality tours for property showcasing" },
        { title: "3D Property Visualization", description: "Advanced 3D modeling and visualization for real estate" },
        { title: "AR Property Marketing", description: "Augmented reality solutions for property marketing" },
        { title: "Digital Twin Properties", description: "Digital twin technology for property management" },
      ],
    },
    events: {
      title: "Events",
      items: [
        { title: "Virtual Events Platform", description: "Comprehensive virtual event management solutions" },
        { title: "Hybrid Event Solutions", description: "Seamlessly combine physical and virtual event experiences" },
        { title: "Interactive Event Tech", description: "Cutting-edge interactive technologies for events" },
        { title: "Event Analytics", description: "Advanced analytics and insights for event optimization" },
      ],
    },
    "immersive-transformation": {
      title: "Immersive Transformation",
      items: [
        { title: "Business Process VR", description: "Transform business processes with virtual reality" },
        { title: "Employee Training", description: "Immersive training solutions for workforce development" },
        { title: "Digital Transformation", description: "Complete digital transformation with immersive technologies" },
      ],
    },
    "education-training": {
      title: "Education and Training",
      items: [
        { title: "VR Learning Platforms", description: "Virtual reality platforms for enhanced learning experiences" },
        { title: "Simulation Training", description: "Realistic simulation environments for skill development" },
        { title: "Interactive Learning", description: "Interactive educational content and experiences" },
      ],
    },
    entertainment: {
      title: "Entertainment",
      items: [
        { title: "Immersive Gaming", description: "Next-generation immersive gaming experiences" },
        { title: "Virtual Concerts", description: "Virtual concert and entertainment platforms" },
        { title: "Interactive Media", description: "Interactive media and entertainment solutions" },
      ],
    },
    defence: {
      title: "Defence",
      items: [
        { title: "Military Training Simulations", description: "Advanced simulation systems for military training" },
        { title: "Strategic Planning VR", description: "Virtual reality solutions for strategic planning" },
        { title: "Defense Analytics", description: "Advanced analytics for defense applications" },
      ],
    },
  },
};

const productsData = {
  sections: [
    { id: "eventcast", title: "EventCast" },
    { id: "shift-space", title: "Shift Space" },
    { id: "audience-engagement-suite", title: "Audience Engagement Suite" },
    { id: "journey-through-time", title: "Journey Through Time" },
    { id: "echobuild", title: "EchoBuild" },
    { id: "nex-dome", title: "Nex-Dome" },
    { id: "visionar-studio", title: "VisionAR Studio" },
    { id: "missionready", title: "MissionReady" },
    { id: "surgixr-suite", title: "SurgiXR Suite" },
  ],
  content: {
    "eventcast": {
      items: [
        { title: "EventCast", description: "Virtual event management platform for immersive experiences" },
      ],
    },
    "shift-space": {
      items: [
        { title: "Shift Space", description: "AR-powered spatial computing tools for enterprise solutions" },
      ],
    },
    "audience-engagement-suite": {
      items: [
        { title: "Audience Engagement Suite", description: "Interactive tools to enhance audience participation" },
      ],
    },
    "journey-through-time": {
      items: [
        { title: "Journey Through Time", description: "Historical recreation and educational VR experiences" },
      ],
    },
    "echobuild": {
      items: [
        { title: "EchoBuild", description: "3D modeling and prototyping in virtual environments" },
      ],
    },
    "nex-dome": {
      items: [
        { title: "Nex-Dome", description: "Full-dome projection systems for immersive visualization" },
      ],
    },
    "visionar-studio": {
      items: [
        { title: "VisionAR Studio", description: "AR content creation platform with no-code tools" },
      ],
    },
    "missionready": {
      items: [
        { title: "MissionReady", description: "VR training simulations for emergency preparedness" },
      ],
    },
    "surgixr-suite": {
      items: [
        { title: "SurgiXR Suite", description: "Medical training and surgical planning in XR" },
      ],
    },
  },
};

export { servicesData, industriesData, productsData };
