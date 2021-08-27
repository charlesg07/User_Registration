import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getTodos } from "./api"

export const TodoList = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const todos = await getTodos()
            setItems(todos)
        }

        fetchItems()
    }, [])
    return <div className="container">
        <div className="mt-3">
            <h3> TodoList</h3>
            <table className="table table-stripped mt-3">
                <thead>
                    <tr>
                        <th>Text</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(todo => (
                            <tr key={todo._id}>
                                <td>
                                    {todo.text}
                                </td>
                                <td>
                                    <Link to={`/edit/${todo.id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))    
                    }
                </tbody>
            </table>
            </div>
        </div>
}