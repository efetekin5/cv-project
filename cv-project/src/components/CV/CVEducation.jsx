export default function CVEducation({education}) {
    return(
        <div className="cveducation">
            {education.map((edu) => {
                <div key={edu.id} className='educationContainer'>
                    <p>{edu.degree}</p>
                    <p>{edu.university}</p>
                    <p>{edu.universityStartDate}</p>
                    <p>{edu.universityEndDate}</p>
                </div>
            })}
        </div>
    )
}