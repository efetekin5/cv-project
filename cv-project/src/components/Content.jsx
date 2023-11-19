import '../styles/content.css'
import { useState } from 'react'
import GeneralInfo from './Form/GeneralInfo.jsx'
import Education from './Form/Education'
import WorkExp from './Form/WorkExp'
import CVEducation from './CV/CVEducation'
import CVWorkExperience from './CV/CVWorkExperience'
import { v4 as uuidv4 } from 'uuid';

export default function Content() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [adress, setAdress] = useState('');
    const [education, setEducation] = useState([]);
    const [workExperience, setworkExperience] = useState([]);

    function changeName(e) {
        setName(e.target.value);
    }

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function changePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    }

    function changeAdress(e) {
        setAdress(e.target.value);
    }

    function addEducation(e) {
        e.preventDefault();
        const degree = e.target[0].value;
        const university = e.target[1].value;
        const universityStartDate = e.target[2].value;
        const universityEndDate = e.target[3].value;
        const id = uuidv4();
        let newEducation = {id, degree, university, universityStartDate, universityEndDate};
        setEducation((prevEducation) => prevEducation.concat(newEducation));
        console.log(newEducation);
        console.log(education);
    }

    return(
        <div className="content">
            <div className="form">
                <GeneralInfo
                    name={name}
                    changeName={changeName}
                    email={email}
                    changeEmail={changeEmail}
                    phoneNumber={phoneNumber}
                    changePhoneNumber={changePhoneNumber}
                    adress={adress}
                    changeAdress={changeAdress}
                ></GeneralInfo>
                <Education
                    education={education}
                    addEducation={addEducation}
                ></Education>
                <WorkExp

                ></WorkExp>
            </div>

            <div className='cvContainer'>
                <div className='cv'>
                    <div className='generalInfo'>
                        <div className='nameSurname'>
                            {name}
                        </div>

                        <div className='adressPhoneMail'>
                            <div className='locationDiv'>
                                <svg className='locationIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
                                
                                <p className='locationText'>
                                    {adress}
                                </p>
                            </div>

                            <p className='phoneNumberDiv'>
                                <svg className='phoneIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>

                                <p className='phoneNumberText'>
                                    {phoneNumber}
                                </p>
                            </p>

                            <p className='emailDiv'>
                                <svg className='emailIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
                            
                                <p className='emailText'>
                                    {email}
                                </p>
                            </p>
                        </div>
                    </div>

                    <hr className='cvLine'/>
                    
                    <h3 className='education'>Education</h3>
                    <CVEducation
                        education={education}
                    ></CVEducation>

                    <h3 className='experience'>Experience</h3>
                    <CVWorkExperience

                    ></CVWorkExperience>
                </div>
            </div>
        </div>
    )
}