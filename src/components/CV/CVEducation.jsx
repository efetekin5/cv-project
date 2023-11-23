export default function CVEducation({education}) {
    return(
        <div className="educationContainer">
            {education.map((edu) => {
                return(
                    <div key={edu.id} className='cveducation'>
                        <p className="universityInfo">{edu.degree}</p>
                        <div className="collegeAndDateInfo">
                            <p className="educationDateInfo">{edu.university}</p> 
                            <p className="educationDateInfo">{edu.universityStartDate} - {edu.universityEndDate}</p> 
                        </div>
                    </div>
                )
            })}      
        </div>
    )
}