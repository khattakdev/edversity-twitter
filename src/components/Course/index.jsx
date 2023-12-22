import "./index.css";
function Course({ instructor, session }) {
  return (
    <div className="course">
      <p>The instructor is - {instructor}</p>
      <p>The class is - {session}</p>
    </div>
  );
}

export default Course;
