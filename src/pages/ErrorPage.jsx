import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen dark:bg-slate-800">
      <div className="h-[80vh] flex justify-center items-center flex-col font-poppins">
        <h1 className="text-6xl font-semibold text-slate-700 dark:text-slate-200">
          404
        </h1>
        <p className="text-3xl text-slate-700 dark:text-slate-200">
          This page does not exist.
        </p>
        <Link to={"/"}>
          <button className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-slate-700 text-slate-100 hover:bg-slate-600">
            Shop Now!
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
