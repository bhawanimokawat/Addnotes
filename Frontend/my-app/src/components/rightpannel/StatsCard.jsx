import { stats } from "../../data/stats";

function StatsCard() {

  return (

    <div className="overview-card">

      <div className="d-flex align-items-center gap-2">

        <i className="bi bi-bar-chart-line fs-5"></i>

        <h6 className="mb-0">

          Statistics

        </h6>

      </div>

      <div className="mt-3">

        <p>

          📝 Notes: {stats.totalNotes}

        </p>

        <p>

          📁 Folders: {stats.totalFolders}

        </p>

        <p className="mb-0">

          📦 Archived: {stats.archived}

        </p>

      </div>

    </div>

  );
}

export default StatsCard;