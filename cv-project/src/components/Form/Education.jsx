import { useState } from "react"

export default function Education({education, addEducation}) {
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
          <form key={0} className="formSection" onSubmit={addEducation}>
            <h5 className="formHeader">Education</h5>
            <input placeholder="Degree" className="input" type="text" value={degree} onChange={changeDegree}></input>
            <input placeholder="University" className="input" type="text" value={university} onChange={changeUniversity}></input>
            <input placeholder="Start Date" className="input" type="text" value={startDate} onChange={changeStartDate}></input>
            <input placeholder="End Date" className="input" type="text" value={endDate} onChange={changeEndDate}></input>
            {education.length > 0 ? (
              <div className="saveAndDelete">
                <button className="save">Save</button>
                <button className="delete">Delete</button>
              </div>
            ) : (
              <button className="addButton" type="submit">Add</button>
            )}
          </form>
    
          {education.length > 0 && (
            education.map((edu, index) => (
              <form key={edu.id} className="formSection" onSubmit={addEducation}>
                <h5 className="formHeader">Education</h5>
                <input placeholder="Degree" className="input" type="text"></input>
                <input placeholder="University" className="input" type="text" ></input>
                <input placeholder="Start Date" className="input" type="text" ></input>
                <input placeholder="End Date" className="input" type="text" ></input>
                {education[index + 1] === undefined ? (
                  <button className="addButton" type="submit">Add</button>
                ) : (
                  <div className="saveAndDelete">
                    <button className="save">Save</button>
                    <button className="delete">Delete</button>
                  </div>
                )}
              </form>
            ))
          )}
        </div>
      );
}