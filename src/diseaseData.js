const diseaseData = {
  "Apple Cedar apple rust": {
    description: "A fungal disease caused by Gymnosporangium juniperi-virginianae. It affects apple trees and causes yellow-orange spots on leaves.",
    symptoms: ["Bright orange or rust-colored spots", "Raised lesions on leaves", "Yellowing of foliage", "Premature leaf drop"],
    causes: ["Fungal infection from nearby juniper trees", "Warm and humid weather", "Poor airflow"],
    treatment: ["Remove infected leaves", "Apply sulfur or copper-based fungicides", "Ensure proper spacing"],
    prevention: ["Avoid planting apple trees near juniper trees", "Regular pruning", "Use resistant varieties"]
  },
  "Apple Black rot": {
    description: "Caused by Botryosphaeria obtusa. Leads to fruit rot and leaf spots.",
    symptoms: ["Dark sunken lesions on fruit", "Brown spots on leaves", "Cankers on branches"],
    causes: ["Fungal spores in debris", "Wet conditions", "Injured tissue"],
    treatment: ["Prune infected parts", "Apply captan fungicide", "Remove debris"],
    prevention: ["Good sanitation", "Resistant varieties", "Proper airflow"]
  },
  "Apple Scab": {
    description: "Common fungal disease caused by Venturia inaequalis.",
    symptoms: ["Olive-green to black scabs", "Deformed fruit", "Leaf drop"],
    causes: ["Cool wet springs", "Overwintering spores"],
    treatment: ["Fungicide sprays", "Remove fallen leaves"],
    prevention: ["Resistant cultivars", "Sanitation"]
  },
  "Apple Healthy": {
    description: "No disease detected. Your apple plant is healthy!",
    symptoms: ["None"],
    causes: ["N/A"],
    treatment: ["N/A"],
    prevention: ["Continue good care practices"]
  }
  // Add more diseases here as your model supports
};

export default diseaseData;