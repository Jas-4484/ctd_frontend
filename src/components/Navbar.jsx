import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [selected, setSelect] = useState('Dashboard');
    useEffect(() => {
        const path = location.pathname.replace('/', '');
        setSelect(path.charAt(0).toUpperCase() + path.slice(1)); // Capitalize first letter
    }, [location]);
    const [role, setRole] = useState('student'); // Change this dynamically based on login
    const navigate = useNavigate();
    useEffect(() => {
        const storedRole = localStorage.getItem("role");
        if (storedRole && ["admin", "student", "teacher"].includes(storedRole)) {
            setRole(storedRole);
        }
    }, []);
    // Define navigation items for different roles
    const navItems = {
        admin: [
            { name: 'Dashboard', icon: 'https://img.icons8.com/?size=100&id=6ocfyfPqD0qz&format=png&color=173061' },
            { name: 'Forms', icon: 'https://img.icons8.com/?size=100&id=SqSSQeb4kNtf&format=png&color=173061' },
            { name: 'Students', icon: 'https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=173061' },
            { name: 'Settings', icon: 'https://img.icons8.com/?size=100&id=83214&format=png&color=173061' },
        ],
        student: [
            { name: 'Dashboard', icon: 'https://img.icons8.com/?size=100&id=6ocfyfPqD0qz&format=png&color=173061' },
            { name: 'Courses', icon: 'https://img.icons8.com/?size=100&id=31340&format=png&color=173061' },
            { name: 'Attendance', icon: 'https://img.icons8.com/?size=100&id=50897&format=png&color=173061' },
            { name: 'Settings', icon: 'https://img.icons8.com/?size=100&id=83214&format=png&color=173061' },
        ],
        teacher: [
            { name: 'Dashboard', icon: 'https://img.icons8.com/?size=100&id=6ocfyfPqD0qz&format=png&color=173061' },
            { name: 'Classes', icon: 'https://img.icons8.com/?size=100&id=9456&format=png&color=173061' },
            { name: 'Attendance', icon: 'https://img.icons8.com/?size=100&id=50897&format=png&color=173061' },
            { name: 'Settings', icon: 'https://img.icons8.com/?size=100&id=83214&format=png&color=173061' },
        ],
    };

    return (
        <>
            <div className="navbar hidden lg:flex flex-col bg-lblue h-[100vh] w-[15%] px-4 py-10 gap-20">
                <div className="logo hidden lg:block">
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className="nav-links hidden lg:flex flex-col h-full justify-start items-center gap-6">
                    <div className="flex flex-col gap-3">
                        {navItems[role].map((item) => (
                            <div
                                key={item.name}
                                className={`flex flex-row items-center py-1.5 px-4 rounded-md cursor-pointer transition-colors duration-300 ${selected === item.name ? 'bg-dblue' : ''}`}
                                onClick={() => { setSelect(item.name); navigate(item.name); }}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className={`h-4 w-4 mr-2 transition-colors duration-300 ${selected === item.name ? 'filter brightness-0 invert' : ''}`}
                                />
                                <button className={`text-xl font-medium text-left ${selected === item.name ? 'text-white' : 'text-dblue'}`}>
                                    {item.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mobile-nav lg:hidden fixed bottom-0 left-0 w-full bg-lblue flex justify-around py-4 shadow-md">
                {navItems[role].map((item) => (
                    <button
                        key={item.name}
                        onClick={() => setSelect(item.name)}
                        className="flex flex-col items-center"
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className={`h-6 w-6 transition-transform duration-300 ${selected === item.name ? 'filter-none' : 'filter brightness-50'}`}
                            style={{
                                transform: selected === item.name ? 'scale(1.1)' : 'scale(1)',
                                filter: selected === item.name ? 'none' : 'grayscale(100%)',
                            }}
                        />
                    </button>
                ))}
            </div>
        </>
    );
};

export default Navbar;
