import { useState } from "react"

export default function WorkExp({workExperience, addWorkExperience, saveWorkExp, deleteWorkExperience}) {
    return (
        <div className="workExperienceFormContainer">
            {workExperience.length > 0 && (
                workExperience.map((exp) => (
                    <form key={exp.id} className="formSection" onSubmit={addWorkExperience}>
                        <h5 className="formHeader">Work Experince</h5>
                        <input placeholder="Job Title" className="input" type="text" defaultValue={exp.jobTitle} required></input>
                        <input placeholder="Company" className="input" type="text" defaultValue={exp.company} required></input>
                        <input placeholder="Start Date" className="input" type="text" defaultValue={exp.jobStartDate} required></input>
                        <input placeholder="End Date" className="input" type="text" defaultValue={exp.jobEndDate} required></input>
                        <textarea placeholder="Description" className="input description" defaultValue={exp.description} required></textarea>
                        <div className="saveAndDelete">
                            <button className="save" type="button" onClick={(e) => {saveWorkExp(e, exp.id)}}>Save</button>
                            <button className="delete" type="button" onClick={() => {deleteWorkExperience(exp.id)}}>Delete</button>
                        </div>
                    </form>                  
                ))
            )}

            <form key={'w0'} className="formSection" onSubmit={addWorkExperience}>
                <h5 className="formHeader">Work Experince</h5>
                <input placeholder="Job Title" className="input" type="text" required></input>
                <input placeholder="Company" className="input" type="text" required></input>
                <input placeholder="Start Date" className="input" type="text" required></input>
                <input placeholder="End Date" className="input" type="text" required></input>
                <textarea placeholder="Description" className="input description" required></textarea>
                <button className="addButton" type="submit">Add</button>
            </form>
        </div>
    )
}