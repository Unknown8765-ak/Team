import { FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="bg-white shadow px-8 py-5 flex items-center justify-between">

      {/* Left */}

      <div>

        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-gray-500 text-sm">
          Welcome back, Admin
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="relative">

          <FaBell
            size={22}
            className="text-gray-600"
          />

          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <FaUserCircle
            size={42}
            className="text-blue-600"
          />

          <div>

            <h4 className="font-semibold">
              Admin
            </h4>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;