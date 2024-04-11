import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h3>404 page not found</h3>
      <Link to="/">Click to go Home page</Link>
    </>
  );
}
// question
// page hiding
//1 case1- if logged in : hide sign-up pages, show loggedin pages, show public pages
//case2-if not logged in: show sign-up pages, hide loggedin pages, show public pages