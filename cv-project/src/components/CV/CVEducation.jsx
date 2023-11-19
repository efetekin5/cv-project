console.log('asdfdsf')

export default function CVEducation({education}) {
    return(
        <div className="cveducation">
            {education.map((edu) => {
                return(
                    <div key={edu.id} className='educationContainer'>
                        <p className="universityInfo">{edu.degree} - {edu.university}</p>
                        <p className="educationDateInfo">{edu.universityStartDate} - {edu.universityEndDate}</p> 
                    </div>
                )
            })}      
        </div>
    )
}

console.log('a')