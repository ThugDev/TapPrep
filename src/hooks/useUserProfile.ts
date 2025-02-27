import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../apis/user';

export const useUserProfile = () => {
    const {
        data: userPorileData,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['userProfile'],
        queryFn: getUserProfile,
    });

    return { userPorileData, isLoading, isError };
};
