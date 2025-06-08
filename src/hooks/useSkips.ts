import { useQuery } from '@tanstack/react-query';
import { skipService } from '../services/skipService';
import { SkipOption } from '../types/skip';

export const useSkips = () => {
  return useQuery<SkipOption[]>({
    queryKey: ['skips'],
    queryFn: skipService.getSkips,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Keep data in cache for 30 minutes
  });
}; 