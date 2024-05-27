import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-col">
      <h1 className="text-5xl font-semibold">404</h1>
      <p className="text-3xl ">This page does not exist.</p>
      <Link to={"/"}>
        <button className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:bg-gray-500">
          Shop Now!
        </button>
      </Link>
    </div>
  );
};
export default ErrorPage;
