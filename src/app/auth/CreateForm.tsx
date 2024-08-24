"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form className="w-1/2 bg-white p-4 ">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <div className="mt-4">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1"
                />
            </div>
            <div className="mt-4">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1"
                />
            </div>
            <div className="mt-4">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full mt-1"
                />
            </div>
            <div className="mt-4">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mt-1"
                />
            </div>
            <div className="mt-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded px-4 py-2"
                    onClick={async (e) => {
                        e.preventDefault();
                        console.log(username, password);
                        const res = await fetch("http://localhost:8080/api/users/signup", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ name, email, username, password }),
                        });
                        if (res.ok) {
                            console.log("Account created");
                        }
                    }}
                >
                    Create
                </button>
            </div>
        </form>
    )
}
