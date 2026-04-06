import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewStudents() {
    const [students, setStudents] = useState([]);

    // Fetch students from Backend
    const fetchStudents = async () => {
        try {
            const res = await axios.get('http://localhost:3000/student/view');
            setStudents(res.data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    // Delete Student Function
    const deleteStudent = async (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            try {
                await axios.delete(`http://localhost:3000/student/delete/${id}`);
                fetchStudents(); // Refresh the list
            } catch (err) {
                console.error("Error deleting student:", err);
            }
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h3>Student Portfolio List</h3>
            <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr key={s._id}>
                            <td>{s.name}</td>
                            <td>{s.email}</td>
                            <td>{s.course}</td>
                            <td>
                                <button onClick={() => deleteStudent(s._id)} style={{ color: 'red' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewStudents;
