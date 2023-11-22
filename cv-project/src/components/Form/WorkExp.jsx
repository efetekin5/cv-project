import { useState } from "react"

export default function WorkExp({workExperience, addWorkExperience, saveWorkExp}) {
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    function changejobTitle(e) {
        setJobTitle(e.target.value);
    }

    function changecompany(e) {
        setCompany(e.target.value);
    }

    function changeStartDate(e) {
        setStartDate(e.target.value);
    }

    function changeEndDate(e) {
        setEndDate(e.target.value);
    }

    function changeDescription(e) {
        setDescription(e.target.value);
    }

    return (
        <div className="workExperienceFormContainer">
            <form key={'w0'} className="formSection" onSubmit={addWorkExperience}>
                <h5 className="formHeader">Work Experince</h5>
                <input placeholder="Job Title" className="input" type="text" value={jobTitle} onChange={changejobTitle} required></input>
                <input placeholder="Company" className="input" type="text" value={company} onChange={changecompany} required></input>
                <input placeholder="Start Date" className="input" type="text" value={startDate} onChange={changeStartDate} required></input>
                <input placeholder="End Date" className="input" type="text" value={endDate} onChange={changeEndDate} required></input>
                <textarea placeholder="Description" className="input description" value={description} onChange={changeDescription} required></textarea>
                {workExperience.length > 0 ? (
                    <div className="saveAndDelete">
                        <button className="save" type="button" onClick={(e) => {saveWorkExp(e, 0)}}>Save</button>
                        <button className="delete">Delete</button>
                    </div>
                ) : (
                    <button className="addButton" type="submit">Add</button>
                )}
            </form>

            {workExperience.length > 0 && (
                workExperience.map((exp, index) => (
                    <form key={exp.id} className="formSection" onSubmit={addWorkExperience}>
                        <h5 className="formHeader">Work Experince</h5>
                        <input placeholder="Job Title" className="input" type="text" required></input>
                        <input placeholder="Company" className="input" type="text" required></input>
                        <input placeholder="Start Date" className="input" type="text" required></input>
                        <input placeholder="End Date" className="input" type="text" required></input>
                        <textarea placeholder="Description" className="input description" required></textarea>
                        {workExperience[index + 1] === undefined ? (
                            <button className="addButton" type="submit">Add</button>
                        ) : (
                            <div className="saveAndDelete">
                                <button className="save" type="button" onClick={(e) => {saveWorkExp(e, exp.id + 1)}}>Save</button>
                                <button className="delete">Delete</button>
                            </div>
                        )}
                    </form>                  
                ))
            )}
        </div>
    )
}