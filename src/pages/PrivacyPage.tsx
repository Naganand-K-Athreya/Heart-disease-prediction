
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";

const PrivacyPage = () => {
  const { logout } = useAuth();

  return (
    <PageContainer className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-medical-dark">Privacy Policy</h1>
          <Button variant="outline" onClick={logout} className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="prose max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            CardioPredict collects personal health information provided directly by you, including but not limited to age, gender, blood pressure readings, cholesterol levels, and other health metrics relevant to cardiovascular risk assessment.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use your health information solely for the purpose of providing you with a personalized cardiovascular risk assessment. Your data is used to generate predictions based on established medical algorithms and machine learning models.
          </p>

          <h2>3. Data Storage and Security</h2>
          <p>
            Your health data is stored locally on your device and is not transmitted to our servers unless you explicitly consent to data submission. We implement appropriate security measures to protect your data from unauthorized access.
          </p>

          <h2>4. Sharing Your Information</h2>
          <p>
            We do not share your personal health information with third parties without your explicit consent. Aggregated, anonymized data may be used for research and improvement of our prediction models.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal health information. You may request a copy of your data or request its deletion at any time.
          </p>

          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at privacy@cardiopredict.example.com.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default PrivacyPage;
