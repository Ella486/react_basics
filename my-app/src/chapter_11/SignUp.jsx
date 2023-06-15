import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");
    const [phone, setPhone] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}
            \n성별: ${gender}
            \n핸드폰: ${phone}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <br />
            <label>
                핸드폰:
                <input type="text" value={phone} onChange={handleChangePhone} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;