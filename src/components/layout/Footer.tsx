
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-gray-600">
              Nutrition Coach is an educational platform designed to teach the
              fundamentals of nutrition in an interactive and engaging way.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><strong>Name:</strong> Sudhanva Rajesh</li>
              <li><strong>UIN:</strong> 834006547</li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:sudhanvarajesh@tamu.edu"
                  className="text-blue-600 hover:underline"
                >
                  sudhanvarajesh@tamu.edu
                </a>
              </li>
              <li>
              <strong>Built for:</strong> KINE 223-059
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;