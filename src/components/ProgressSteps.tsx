import { steps, Step, ProgressStepsProps } from '../types/steps';


const ProgressSteps = ({ currentStep }: ProgressStepsProps) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center justify-center space-x-8">
        {steps.map((step: Step) => (
          <li key={step.id} className="relative">
            {step.id < currentStep ? (
              <div className="flex items-center">
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
              </div>
            ) : step.id === currentStep ? (
              <div className="flex items-center">
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                </span>
                <span className="ml-4 text-sm font-medium text-blue-600">{step.name}</span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-transparent"></span>
                </span>
                <span className="ml-4 text-sm font-medium text-gray-500">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressSteps;
