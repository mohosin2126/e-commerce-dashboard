import { Link, useLocation } from "react-router-dom";

export default function NavItem({ to, icon: Icon, label, submenu, openSubmenu, handleSubmenuToggle, closeAllSubmenus }) {
    const location = useLocation();
    const activeClass = 'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100';
    const inactiveClass = 'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100';

    const handleClick = () => {
        if (!submenu) {
            closeAllSubmenus();
        }
    };

    const isSubmenuOpen = openSubmenu === label;

    return (
        <div>
            <div
                onClick={submenu ? () => handleSubmenuToggle(label) : handleClick}
                className={`flex items-center px-6 py-2 mt-4 duration-200 border-l-4 cursor-pointer ${
                    location.pathname === to ? activeClass : inactiveClass
                }`}
            >
                {!submenu ? (
                    <Link to={to} className="flex items-center w-full">
                        <Icon />
                        <span className="mx-4">{label}</span>
                    </Link>
                ) : (
                    <div className="flex items-center w-full">
                        <Icon />
                        <span className="mx-4">{label}</span>
                        <span className={`ml-auto ${isSubmenuOpen ? "transform rotate-90" : ""}`}>▸</span>
                    </div>
                )}
            </div>

            {/* Render submenu if it exists and is open */}
            {submenu && (
                <div className={`ml-6 overflow-hidden transition-all duration-300 ${isSubmenuOpen ? "max-h-40" : "max-h-0"}`}>
                    {submenu.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={`flex items-center px-6 py-2 mt-2 duration-200 border-l-4 ${
                                location.pathname === item.to ? activeClass : inactiveClass
                            }`}
                        >
                            <span className="mx-4">{item.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
