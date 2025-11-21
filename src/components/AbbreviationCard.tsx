import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Abbreviation } from "@/data/abbreviations";

interface AbbreviationCardProps {
  abbreviation: Abbreviation;
}

export const AbbreviationCard = ({ abbreviation }: AbbreviationCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-medical-border">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-2xl font-bold text-primary mb-2">
              {abbreviation.abbr}
            </CardTitle>
            <CardDescription className="text-base font-medium text-foreground">
              {abbreviation.fullForm}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {abbreviation.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {abbreviation.description}
        </p>
      </CardContent>
    </Card>
  );
};
