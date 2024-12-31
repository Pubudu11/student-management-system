import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import { addStudent } from "../services/api";
import { Student } from "../types/student";

const AddStudent: React.FC = () => {
    const [student, setStudent] = useState<Omit<Student, "id">>({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
        yearofEnrollment: 0,
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addStudent(student as Student);
            toast.success('Student Added')
            navigate("/");
        } catch (error) {
            console.error("Failed to add student:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input
                        name="department"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Year of Enrollment</label>
                    <input
                        name="yearofEnrollment"
                        type="number"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Add Student
                </button>
            </form>
        </div>
    );
};

export default AddStudent;
