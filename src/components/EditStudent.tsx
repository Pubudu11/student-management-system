import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../services/api";
import { Student } from "../types/student";

const EditStudent: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Extract the student ID from the route
    const navigate = useNavigate();

    const [student, setStudent] = useState<Omit<Student, "id"> & { id?: number }>({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
        yearofEnrollment: new Date().getFullYear(),
    });

    useEffect(() => {
        if (id) {
            fetchStudentDetails(parseInt(id, 10));
        }
    }, [id]);

    const fetchStudentDetails = async (studentId: number) => {
        try {
            const response = await getStudentById(studentId);
            setStudent({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                department: response.data.department,
                yearofEnrollment: response.data.yearOfEnrollment,
            });
        } catch (error) {
            console.error("Failed to fetch student details:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            try {
                await updateStudent(parseInt(id, 10), { ...student, id: parseInt(id, 10) });
                navigate("/"); // Redirect to the Student List page
            } catch (error) {
                console.error("Failed to update student:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Edit Student</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        className="form-control"
                        value={student.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        className="form-control"
                        value={student.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input
                        name="department"
                        type="text"
                        className="form-control"
                        value={student.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Year of Enrollment</label>
                    <input
                        name="yearOfEnrollment"
                        type="number"
                        className="form-control"
                        value={student.yearofEnrollment}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Update Student
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate("/")}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditStudent;
