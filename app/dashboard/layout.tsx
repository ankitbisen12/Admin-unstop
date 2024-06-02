import SideNav from "../UI/dashboard/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 bg-white">
        <SideNav />
      </div>
      <div className="w-6 hidden md:block lg:block bg-gray-100"></div>
      <div className="flex-grow px-0 md:overflow-y-auto bg-white">
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-4 ">
          <div className="flex flex-row items-center px-4">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-sky-900 px-2 py-6 lg:py-2">
              Assessment
            </h1>
            <div className="h-12 border-r-2 border-gray-300 mx-4"></div>
            <h2 className="relative z-10 -mb-px py-6 flex items-center cursor-pointer border-sky-600 text-sky-600 border-b-4 ml-4 text-lg font-medium transition-colors duration-200 ease-out">
              My Assessments
            </h2>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
