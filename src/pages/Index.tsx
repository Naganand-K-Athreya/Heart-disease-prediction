
import { PageContainer } from "@/components/layout/PageContainer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageContainer>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      
      <section className="py-16 bg-medical-DEFAULT text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Check Your Heart Health?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward understanding your heart disease risk with our AI-powered prediction tool.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-medical-DEFAULT font-medium">
            <Link to="/predict">
              Start Your Assessment Now
            </Link>
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};

export default Index;
