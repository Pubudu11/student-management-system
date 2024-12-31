import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudents, deleteStudent } from "../services/api";
import { Student } from "../types/student";

const StudentList: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await getStudents();
            setStudents(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Failed to fetch students:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteStudent(id);
            fetchStudents();
        } catch (error) {
            console.error("Failed to delete student:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Student List</h2>
            <Link to="/add" className="btn btn-primary mb-3">
                Add Student
            </Link>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Year</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{`${student.firstName} ${student.lastName}`}</td>
                        <td>{student.email}</td>
                        <td>{student.department}</td>
                        <td>{student.yearofEnrollment}</td>
                        <td>
                            <Link
                                to={`/edit/${student.id}`}
                                className="btn btn-info btn-sm me-2"
                            >
                                Edit
                            </Link>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(student.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
