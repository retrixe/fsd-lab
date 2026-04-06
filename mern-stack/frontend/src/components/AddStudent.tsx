import React, { useState } from 'react';
import axios from 'axios';

function AddStudent() {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        course: ''
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/student/add', student);
            alert('Student Added Successfully!');
            setStudent({ name: '', email: '', course: '' }); // Clear form
            window.location.reload(); // Refresh to show new data in View component
        } catch (err) {
            console.error("Error adding student:", err);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}>
            <h3>Add New Student</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required /><br/><br/>
                <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} required /><br/><br/>
                <input type="text" name="course" placeholder="Course" value={student.course} onChange={handleChange} required /><br/><br/>
                <button type="submit">Add Student Portfolio</button>
            </form>
        </div>
    );
}

export default AddStudent;
