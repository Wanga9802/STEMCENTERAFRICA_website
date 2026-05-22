import { Link, Routes, Route, useLocation, useParams } from 'react-router-dom';

const COURSE_CATEGORIES = [
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    description: 'Build real-world software products from scratch with beginner to advanced training.',
    offerings: [
      { slug: 'intro', title: 'Intro to Software Engineering', details: 'Learn the fundamentals of modern software development.', duration: 'Full-time Remote' },
      { slug: 'fullstack', title: 'Full-Stack Bootcamp', details: 'Master frontend and backend development with real projects.', duration: 'Part-time Remote' },
    ],
  },
  {
    id: 'data',
    name: 'Data Courses',
    description: 'Master data analysis, visualisation, and engineering with practical projects.',
    offerings: [
      { slug: 'analysis', title: 'Data Analysis Fundamentals', details: 'Learn the tools used by data analysts to find insights.', duration: 'Full-time Remote' },
      { slug: 'engineering', title: 'Data Engineering Bootcamp', details: 'Build data pipelines and systems for real-world use.', duration: 'Part-time Remote' },
    ],
  },
  {
    id: 'cyber',
    name: 'Cyber Security',
    description: 'Start your cybersecurity career with hands-on training.',
    offerings: [
      { slug: 'intro', title: 'Introduction to Cybersecurity', details: 'Foundations of security, risk management, and threat protection.', duration: 'Full-time Remote' },
      { slug: 'bootcamp', title: 'Cybersecurity Bootcamp', details: 'Advance your skills with incident response and defense tools.', duration: 'Part-time Remote' },
    ],
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    description: 'Explore machine learning and AI through practical, project-based lessons.',
    offerings: [
      { slug: 'foundations', title: 'AI Foundations', details: 'Learn how AI works and build your first models.', duration: 'Full-time Remote' },
      { slug: 'ml-bootcamp', title: 'Machine Learning Bootcamp', details: 'Dive into supervised and unsupervised learning projects.', duration: 'Part-time Remote' },
    ],
  },
  {
    id: 'dpo',
    name: 'Data Protection Officer',
    description: 'Prepare for compliance and privacy leadership roles in organizations.',
    offerings: [
      { slug: 'certification', title: 'DPO Certification Programme', details: 'Complete training for privacy regulation and data protection.', duration: 'Full-time Remote' },
    ],
  },
];

function CoursesIndex() {
  return (
    <div className="page-placeholder">
      <h1>Courses</h1>
      <p>Choose a course category to view available programmes.</p>
      <div className="course-list">
        {COURSE_CATEGORIES.map((category) => (
          <div key={category.id} className="course-category-card">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <ul>
              {category.offerings.map((offering) => (
                <li key={offering.slug}>
                  <Link to={`/${category.id}/${offering.slug}`} className="course-link">
                    {offering.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseDetail() {
  const { category, slug } = useParams();
  const location = useLocation();
  const course = COURSE_CATEGORIES.find((item) => item.id === category);
  const offering = course?.offerings.find((item) => item.slug === slug);

  if (!course || !offering) {
    return (
      <div className="page-placeholder">
        <h1>Course not found</h1>
        <p>We could not locate that course.</p>
        <p>Requested path: <strong>{location.pathname}</strong></p>
        <Link to="/courses" className="course-link">Back to course list</Link>
      </div>
    );
  }

  return (
    <div className="page-placeholder">
      <h1>{offering.title}</h1>
      <p>{offering.details}</p>
      <p><strong>Duration:</strong> {offering.duration}</p>
      <p>Category: {course.name}</p>
      <p>Requested path: <strong>{location.pathname}</strong></p>
      <Link to="/courses" className="course-link">Back to all courses</Link>
    </div>
  );
}

function Courses() {
  return (
    <Routes>
      <Route index element={<CoursesIndex />} />
      <Route path=":category/:slug" element={<CourseDetail />} />
    </Routes>
  );
}

export default Courses;
