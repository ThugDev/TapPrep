import { useAnswerForm } from '../../../hooks/useAnswerForm';

export type AnswerExplanationProps = {
    isCorrect?: boolean;
    explanation?: string;
    reference?: string;
    isSolved?: boolean;
};

export type AnswerFormProps = {
    problemType: number;
    formData: ReturnType<typeof useAnswerForm>['formData'];
    setAnswerText: (text: string) => void;
    setAnswerOX: (ox: boolean) => void;
};
