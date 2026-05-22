import { useLocation } from 'react-router-dom';

function Courses() {
  const location = useLocation();
  return (
    <div className="page-placeholder">
      <h1>Courses</h1>
      <p>This is the courses page.</p>
      {location.pathname !== '/courses' && (
        <p>Course path: <strong>{location.pathname}</strong></p>
      )}
    </div>
  );
}

export default Courses;
