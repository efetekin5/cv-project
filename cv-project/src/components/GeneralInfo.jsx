export default function GeneralInfo({name, changeName, adress, changeAdress, phoneNumber, changePhoneNumber, email, changeEmail}) {

    return(
        <div className="formSection">
            <h5 className="formHeader">General Information</h5>
            <input placeholder="Name" className="input" type="text" value={name} onChange={changeName}></input>
            <input placeholder="Email" className="input" type="text" value={email} onChange={changeEmail}></input>
            <input placeholder="Phone Number" className="input" type="number" value={phoneNumber} onChange={changePhoneNumber}></input>
            <input placeholder="Adress" className="input" type="text" value={adress} onChange={changeAdress}></input>
            <button className="addButton">Add</button>
        </div>
    )
}