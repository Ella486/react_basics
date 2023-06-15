import React from "react";

const students = [
    {
        id: 1,
        name: "M.J",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id:4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>; //일반적인 key 설정
                //return <li key={`student-id-${student.id}`}>{student.name}</li>; //key를 포맷팅 된 문자열로 변경 가능
            })}
        </ul>
        /*<ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>; //key를 index로 변경 가능
            })}
        </ul> */
    );
}

export default AttendanceBook;
