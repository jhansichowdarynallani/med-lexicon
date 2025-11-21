import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Search, Filter, Smartphone } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Quickly find abbreviations with real-time search across all terms and descriptions.",
    },
    {
      icon: Filter,
      title: "Category Filtering",
      description: "Browse abbreviations by medical specialty including Cardiology, Neurology, and more.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Access the dictionary seamlessly on any device - desktop, tablet, or mobile.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Database",
      description: "Extensive collection of medical abbreviations with detailed explanations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              About MedAbbr Dictionary
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Your comprehensive resource for understanding medical abbreviations and terminology
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Medical Abbreviation Dictionary was created to provide healthcare professionals,
                  students, and anyone interested in medical terminology with quick and accurate access
                  to commonly used medical abbreviations.
                </p>
                <p>
                  Understanding medical abbreviations is crucial for clear communication in healthcare
                  settings. Our goal is to make this information easily accessible and searchable,
                  helping to improve patient safety and professional communication.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-12 bg-muted/30">
              <CardHeader>
                <CardTitle className="text-2xl">Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>
                  This dictionary is intended for educational and informational purposes only. It should
                  not be used as a substitute for professional medical advice, diagnosis, or treatment.
                  Always consult with qualified healthcare professionals for medical decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
