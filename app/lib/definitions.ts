

export type  Skill ={
    id: number;
    skill: string;
  };
  
export type Question ={
    id: number;
    questionText: string;
    options: string[];
    correctAnswer: string;
  };
  
export type AssessmentForm= {
    testName: string;
    description: string;
    skills: Skill[];
    duration: string;
    questions: Question[];
  };

export type Users={
  id:string
  name:string,
  email:string,
  admin:string
}