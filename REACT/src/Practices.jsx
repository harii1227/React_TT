const Practices = () => {

    const students = [1];

    return (
        <>
            {/* <p>{students.length && "No students found"}</p> */}
            {/* 1st solution */}
            <p>{students.length ===0 && "No students found"}</p>

            <p>Number of students: {students.length}</p>
        </>
    )
}

export default Practices