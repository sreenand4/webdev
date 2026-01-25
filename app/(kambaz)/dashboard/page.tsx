import Link from "next/link";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234/home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
           <Link href="/courses/5500/home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS5500 React JS </h5>
              <p className="wd-dashboard-course-title">
             Objective-C
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
           <Link href="/courses/5300/home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS5300 React JS </h5>
              <p className="wd-dashboard-course-title">
             Python
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
           <Link href="/courses/2222/home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS2222 React JS </h5>
              <p className="wd-dashboard-course-title">
             Algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
           <Link href="/courses/3333/home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS3333 React JS </h5>
              <p className="wd-dashboard-course-title">
             Java
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
           <Link href="/courses/4444/home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS4444 React JS </h5>
              <p className="wd-dashboard-course-title">
             C++
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
         <div className="wd-dashboard-course">
           <Link href="/courses/4550/home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS4550 React JS </h5>
              <p className="wd-dashboard-course-title">
             Web Dev
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
