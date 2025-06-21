import { useQuery } from '@tanstack/react-query';
export const useGenerateQuestions = ({ context }) => {
    const { data, isLoading } = useQuery({
        queryKey: ['generate-questions', context],
        enabled: !!context, 
    });

    return {
        questions: data.questions ?? [],
        answers: data.answers ?? [],
        isError: data.error ? true : false,
        isLoading,
    };
}
