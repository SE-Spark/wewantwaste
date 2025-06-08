import { useState } from "react";
import { Button } from "../components/ui/button";
import SkipCard from "./SkipCard";
import ProgressSteps from "./ProgressSteps";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSkips } from "../hooks/useSkips";

const SkipSelection = () => {
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  const { data: skipData, isLoading, error } = useSkips();

  const handleSkipSelect = (skipId: number) => {
    setSelectedSkipId(skipId);
    console.log("Selected skip:", skipId);
  };

  const handleContinue = () => {
    if (selectedSkipId) {
      console.log("Proceeding with skip:", selectedSkipId);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Loading skip options...</h2>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Error loading skip options</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        <ProgressSteps currentStep={3} />
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Choose Your Skip Size
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the skip size that best suits your needs. All prices include delivery and collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skipData?.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkipId === skip.id}
              onSelect={handleSkipSelect}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <Button 
            onClick={handleContinue}
            disabled={!selectedSkipId}
            className="flex items-center gap-2 w-full sm:w-auto bg-blue-500 hover:bg-blue-600"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

  
export default SkipSelection;
