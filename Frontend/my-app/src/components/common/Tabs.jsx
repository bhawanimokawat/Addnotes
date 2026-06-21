function Tabs({

  activeTab,

  setActiveTab,

}) {

  return (

    <div className="d-flex gap-4 mb-4">

      <span

        className={`tab-item ${
          activeTab === "today"
            ? "active-tab"
            : ""
        }`}

        onClick={() =>
          setActiveTab("today")
        }

      >
        Today

      </span>

      <span

        className={`tab-item ${
          activeTab === "week"
            ? "active-tab"
            : ""
        }`}

        onClick={() =>
          setActiveTab("week")
        }

      >
        This Week

      </span>

      <span

        className={`tab-item ${
          activeTab === "month"
            ? "active-tab"
            : ""
        }`}

        onClick={() =>
          setActiveTab("month")
        }

      >
        This Month

      </span>

    </div>

  );

}

export default Tabs;