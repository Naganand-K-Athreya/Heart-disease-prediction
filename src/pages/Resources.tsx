
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeInfo, Book, ExternalLink, Heart, HeartPulse, Salad, Utensils } from "lucide-react";

const resourceCategories = [
  {
    id: "general",
    label: "General",
    icon: Heart,
  },
  {
    id: "nutrition",
    label: "Nutrition",
    icon: Utensils,
  },
  {
    id: "exercise",
    label: "Exercise",
    icon: Salad,
  },
  {
    id: "medical",
    label: "Medical",
    icon: HeartPulse,
  }
];

const resources = {
  general: [
    {
      title: "American Heart Association",
      description: "Comprehensive resources on heart health, prevention, and treatment.",
      link: "https://www.heart.org/",
      type: "Organization"
    },
    {
      title: "Heart Disease: Facts, Prevention, and Risk Factors",
      description: "Learn about the basics of heart disease and how to prevent it.",
      link: "https://www.cdc.gov/heartdisease/",
      type: "Article"
    },
    {
      title: "Know Your Risk Factors for Heart Disease",
      description: "Understanding the key risk factors that can lead to heart disease.",
      link: "https://www.heart.org/en/health-topics/heart-attack/understand-your-risks-to-prevent-a-heart-attack",
      type: "Guide"
    }
  ],
  nutrition: [
    {
      title: "Personalized Meal Planning Guide",
      description: "Create your own heart-healthy meal plan with our interactive guide, including calorie calculations and portion control tips.",
      link: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics",
      type: "Interactive Guide"
    },
    {
      title: "Heart-Healthy Superfoods",
      description: "Discover the top 20 superfoods that can improve heart health, including omega-3 rich fish, berries, and leafy greens.",
      link: "https://www.health.harvard.edu/heart-health/foods-that-fight-inflammation",
      type: "Food Guide"
    },
    {
      title: "Low-Sodium Cooking Techniques",
      description: "Master the art of flavorful cooking without excess salt. Learn about herbs, spices, and cooking methods that enhance taste naturally.",
      link: "https://www.nhlbi.nih.gov/health/educational/healthdisp/pdf/recipes/Recipes-African-American.pdf",
      type: "Cooking Guide"
    },
    {
      title: "Weekly Meal Prep Strategies",
      description: "Step-by-step guide to preparing heart-healthy meals for the week, including shopping lists and storage tips.",
      link: "https://nutritionsource.hsph.harvard.edu/meal-prep/",
      type: "Meal Planning"
    },
    {
      title: "Smart Shopping Guide",
      description: "Learn to navigate grocery stores, read nutrition labels, and make heart-conscious food choices. Includes a printable shopping list.",
      link: "https://www.eatright.org/food/planning/smart-shopping",
      type: "Shopping Guide"
    },
    {
      title: "Heart-Healthy Recipe Database",
      description: "Over 100 delicious recipes categorized by meal type, cooking time, and dietary restrictions. All recipes are nutritionist-approved.",
      link: "https://www.heartfoundation.org.au/recipes",
      type: "Recipe Collection"
    }
  ],
  exercise: [
    {
      title: "30-Day Heart Health Challenge",
      description: "A structured program to build heart-healthy exercise habits, with daily workouts suitable for all fitness levels.",
      link: "https://www.cdc.gov/physicalactivity/basics/index.htm",
      type: "Program"
    },
    {
      title: "Cardio Exercise Library",
      description: "Video demonstrations of various cardio exercises, from walking to high-intensity interval training, with proper form guidance.",
      link: "https://fitkit.com/wp-content/uploads/2016/08/FitKitCardio.pdf",
      type: "Video Guide"
    },
    {
      title: "Heart Rate Monitoring Guide",
      description: "Learn to calculate your target heart rate zones and use them to optimize your workouts for heart health.",
      link: "https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates",
      type: "Training Guide"
    },
    {
      title: "Strength Training for Heart Health",
      description: "Essential strength exercises that complement cardio workouts, including bodyweight exercises and resistance training.",
      link: "https://news.umich.edu/weight-training-can-improve-heart-disease-risk-factors-in-just-30-minutes-a-week/",
      type: "Exercise Guide"
    },
    {
      title: "Flexibility & Recovery",
      description: "Important stretching routines and recovery techniques to support your heart-healthy exercise program.",
      link: "https://sportscotland.org.uk/performance/cutting-edge/archive/recovery-flexibility-and-stretching",
      type: "Recovery Guide"
    },
    {
      title: "Exercise Safety Guidelines",
      description: "Learn how to exercise safely with heart conditions, including warning signs and modification techniques.",
      link: "https://www.acgov.org/wellness/documents/ExerciseSafetyHandout.pdf",
      type: "Safety Guide"
    }
  ],
  medical: [
    {
      title: "Understanding Cholesterol Levels",
      description: "Learn about the different types of cholesterol and target levels.",
      link: "https://www.bhf.org.uk/informationsupport/risk-factors/high-cholesterol/understanding-your-cholesterol-levels",
      type: "Medical"
    },
    {
      title: "Blood Pressure Management",
      description: "Strategies for monitoring and controlling high blood pressure.",
      link: "https://www.nhlbi.nih.gov/health/high-blood-pressure/treatment",
      type: "Guide"
    },
    {
      title: "Heart Disease Medications",
      description: "Overview of common medications used to treat heart conditions.",
      link: "https://www.webmd.com/heart-disease/heart-disease-medications",
      type: "Medical"
    }
  ]
};

const Resources = () => {
  return (
    <PageContainer>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
              Heart Health Resources
            </h1>
            <p className="text-lg text-gray-700">
              Educational materials and tools to help you understand and improve your heart health
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general">
              <div className="flex justify-center mb-8">
                <TabsList>
                  {resourceCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center">
                      <category.icon className="mr-2" size={16} />
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {Object.entries(resources).map(([key, items]) => (
                <TabsContent key={key} value={key}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((resource, index) => (
                      <Card key={index} className="h-full flex flex-col">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                            <span className="text-xs bg-medical-light text-medical-dark px-2 py-1 rounded-full">
                              {resource.type}
                            </span>
                          </div>
                          <CardDescription>{resource.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="mt-auto">
                          <a 
                            href={resource.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-medical-DEFAULT hover:text-medical-dark flex items-center"
                          >
                            Learn More 
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <BadgeInfo className="text-medical-DEFAULT mr-2" size={24} />
              <h2 className="text-2xl font-bold text-medical-dark">
                Understanding Your Assessment
              </h2>
            </div>
            <p className="text-gray-700">
              Learn how to interpret your heart disease risk assessment and discuss it with your healthcare provider.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-medical-dark">Reading Your Risk Score</h3>
                    <p className="text-gray-700">
                      Your risk score indicates the likelihood of developing heart disease based on your personal risk factors. This score ranges from 0-100%, with higher percentages indicating greater risk:
                    </p>
                    <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-700">
                      <li><span className="font-medium text-green-600">Low Risk (0-30%)</span>: Your current risk factors suggest a lower probability of heart disease.</li>
                      <li><span className="font-medium text-amber-600">Moderate Risk (30-60%)</span>: You have several risk factors that may increase your chance of heart disease.</li>
                      <li><span className="font-medium text-red-600">High Risk (60-100%)</span>: Multiple significant risk factors suggest a higher probability of heart disease.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-medical-dark">Talking to Your Doctor</h3>
                    <p className="text-gray-700">
                      Bring your assessment results to your next appointment. Discuss:
                    </p>
                    <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-700">
                      <li>Your overall risk level and specific risk factors</li>
                      <li>Additional tests that might be appropriate</li>
                      <li>Lifestyle changes to reduce your risk</li>
                      <li>Whether medications might be beneficial</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-medical-dark">Next Steps</h3>
                    <p className="text-gray-700">
                      Based on your risk level, consider these recommendations:
                    </p>
                    <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-700">
                      <li><span className="font-medium">All Risk Levels</span>: Maintain a heart-healthy diet, regular exercise, and avoid smoking</li>
                      <li><span className="font-medium">Moderate Risk</span>: Schedule a check-up with your doctor within the next few months</li>
                      <li><span className="font-medium">High Risk</span>: Consult with a healthcare provider soon for a complete cardiovascular evaluation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Book className="text-medical-DEFAULT mr-2" size={24} />
            <h2 className="text-2xl font-bold text-medical-dark">
              Educational Videos
            </h2>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10">
            Watch these informative videos to learn more about heart disease, prevention strategies, and heart-healthy living.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
                <p className="text-gray-500">Video Placeholder {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Resources;
