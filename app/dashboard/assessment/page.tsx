import Assessments from "@/app/UI/assessment/Assessments";
import { fetchAssessmentDetails } from "@/app/lib/data";

const Assessment = async () => { 
  const assessmentDetails= await fetchAssessmentDetails();

  return (
    <section className="text-gray-600 body-font">
      <Assessments assessmentDetails={assessmentDetails}/>
    </section>
  );
};

export default Assessment;
