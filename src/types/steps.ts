export interface Step {
  id: number;
  name: string;
  description: string;
  current?: boolean;
}

export interface ProgressStepsProps {
  currentStep: number;
}

export const steps: Step[] = [
  { id: 1, name: "Postcode", description: "Enter location" },
  { id: 2, name: "Waste Type", description: "Choose waste" },
  { id: 3, name: "Select Skip", description: "Pick size", current: true },
  { id: 4, name: "Permit Check", description: "Road permit" },
  { id: 5, name: "Choose Date", description: "Delivery date" },
  { id: 6, name: "Payment", description: "Complete order" },
]; 