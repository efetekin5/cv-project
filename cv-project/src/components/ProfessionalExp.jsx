import { useState } from "react"

export default function ProfessionalExp() {
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
        <div className="formSection">
            <h5 className="formHeader">Professional Experince</h5>
            <input placeholder="Job Title" className="input" type="text" value={jobTitle} onChange={changejobTitle}></input>
            <input placeholder="Company" className="input" type="text" value={company} onChange={changecompany}></input>
            <input placeholder="Start Date" className="input" type="text" value={startDate} onChange={changeStartDate}></input>
            <input placeholder="End Date" className="input" type="text" value={endDate} onChange={changeEndDate}></input>
            <textarea placeholder="Description" className="input description" value={description} onChange={changeDescription}></textarea>
            <button className="addButton">Add</button>
        </div>
    )
}