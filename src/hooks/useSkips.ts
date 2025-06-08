import { useQuery } from '@tanstack/react-query';
import { skipService } from '../services/skipService';

export const useSkips = () => {
  return useQuery({
    queryKey: ['skips'],
    queryFn: skipService.getSkips,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    cacheTime: 30 * 60 * 1000, // Keep data in cache for 30 minutes
  });
}; 