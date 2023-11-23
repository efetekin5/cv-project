export default function CVWorkExperience({workExperience}) {
    return(
        <div className='workExperienceContainer'>
            {workExperience.map((exp) => {
                return(
                    <div key={exp.id} className="workExperience">
                        <div className="jobInfo">
                            <p className="companyInfo">{exp.jobTitle} - {exp.company}</p>
                            <p className="jobDateInfo">{exp.jobStartDate} - {exp.jobEndDate}</p>
                        </div>
                        <p className="jobDescriptionInfo">{exp.description}</p>
                    </div>
                )
            })}
        </div>
    
    )
}