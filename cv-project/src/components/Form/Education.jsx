import { useState } from "react"

export default function Education({education, addEducation, saveEducation, deleteEducation}) {
    const [degree, setDegree] = useState('');
    const [university, setUniversity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function changeDegree(e) {
        setDegree(e.target.value);
    }

    function changeUniversity(e) {
        setUniversity(e.target.value);
    }

    function changeStartDate(e) {
        setStartDate(e.target.value);
    }

    function changeEndDate(e) {
        setEndDate(e.target.value);
    }

    return (
        <div className="educationFormContainer">
          {education.length > 0 && (
            education.map((edu) => (
              <form key={edu.id} className="formSection" onSubmit={addEducation}>
                <h5 className="formHeader">Education</h5>
                <input placeholder="Degree" className="input" type="text" defaultValue={edu.degree} required></input>
                <input placeholder="University" className="input" type="text" defaultValue={edu.university} required></input>
                <input placeholder="Start Date" className="input" type="text" defaultValue={edu.universityStartDate} required></input>
                <input placeholder="End Date" className="input" type="text" defaultValue={edu.universityEndDate} required></input>
                <div className="saveAndDelete">
                  <button className="save" type="button" onClick={(e) => {saveEducation(e, edu.id)}}>Save</button>
                  <button className="delete" type="button" onClick={() => {deleteEducation(edu.id)}}>Delete</button>
                </div>
              </form>
            ))
          )}

          <form key={'eduForm0'} className="formSection" onSubmit={addEducation}>
            <h5 className="formHeader">Education</h5>
            <input placeholder="Degree" className="input" type="text"  required></input>
            <input placeholder="University" className="input" type="text"  required></input>
            <input placeholder="Start Date" className="input" type="text"  required></input>
            <input placeholder="End Date" className="input" type="text"  required></input>
            <button className="addButton" type="submit">Add</button>
          </form>
        </div>
      );
}