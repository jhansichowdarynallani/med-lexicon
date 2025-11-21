import { Stethoscope } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-primary" />
            <span className="font-semibold">MedAbbr Dictionary</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © 2024 Medical Abbreviation Dictionary. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};
