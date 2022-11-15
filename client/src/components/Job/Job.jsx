import moment from "moment"; // moment js for time-format
import { Link } from "react-router-dom";
import Wrapper from "./Job.styles";
import JobInfo from "../JobInfo/JobInfo";
import { useAppContext } from "../../context/appContext";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const { setEditJob, deleteJob } = useAppContext();

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className="content">
        {/* content center */}
        <div className="content-center">
          <JobInfo icon={<span className="material-symbols-outlined">map</span>} text={jobLocation} />
          <JobInfo icon={<span className="material-symbols-outlined">calendar_month</span>} text={date} />
          <JobInfo icon={<span className="material-symbols-outlined">work</span>} text={jobType} />

          <div className={`status ${status}`}>{status}</div>
        </div>

        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              onClick={() => setEditJob(_id)}
              className="btn edit-btn"
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteJob(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
