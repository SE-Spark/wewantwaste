import { SkipOption } from '../types/skip';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';


export const skipService = {
  getSkips: async (): Promise<SkipOption[]> => {
    const response = await fetch(`${API_BASE_URL}/skips/by-location?postcode=NR32&area=Lowestoft`);
    if (!response.ok) {
      throw new Error('Failed to fetch skips');
    }
    return response.json();
  }
}; 