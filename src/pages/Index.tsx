import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { AbbreviationCard } from "@/components/AbbreviationCard";
import { abbreviations, categories } from "@/data/abbreviations";
import { BookOpen } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAbbreviations = useMemo(() => {
    let filtered = abbreviations;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((abbr) => abbr.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (abbr) =>
          abbr.abbr.toLowerCase().includes(query) ||
          abbr.fullForm.toLowerCase().includes(query) ||
          abbr.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Medical Abbreviation Dictionary
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Search and discover medical abbreviations with their full forms and meanings
              </p>
            </div>

            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search abbreviations, full forms, or descriptions..."
            />
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 border-b bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                {searchQuery || selectedCategory !== "All"
                  ? `${filteredAbbreviations.length} Results`
                  : "All Abbreviations"}
              </h2>
              <p className="text-muted-foreground mt-1">
                {selectedCategory !== "All" && `Filtered by ${selectedCategory}`}
              </p>
            </div>

            {filteredAbbreviations.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredAbbreviations.map((abbr) => (
                  <AbbreviationCard key={abbr.id} abbreviation={abbr} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  No abbreviations found matching your search.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try adjusting your search terms or filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
