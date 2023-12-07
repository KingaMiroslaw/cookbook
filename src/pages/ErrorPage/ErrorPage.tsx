import { Link } from "react-router-dom";
import error from "../../assets/Error.svg";
import Button from "../../components/Button";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh_-_85px)]">
      <img
        className="w-screen sm:max-w-[600px] mb-4"
        src={error}
        alt="not found "
      />
      <h3 className="font-bold  text-orange-400 mt-2 text-xl">
        Ohh! Page Not Found
      </h3>
      <p className="mb-4">We can't seem to find the page you're looking for</p>
      <Link to="/">
        <Button className="text-xl">Back Home</Button>
      </Link>
    </div>
  );
};
export default ErrorPage;
