import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h3>404 page not found</h3>
      <Link to="/">Click to go Home page</Link>
    </>
  );
}
