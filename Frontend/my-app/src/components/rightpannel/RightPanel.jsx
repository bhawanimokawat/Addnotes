import CalendarCard from "./CalendarCard";
import QuickNoteCard from "./QuickNoteCard";
import StatsCard from "./StatsCard";

function RightPanel() {
  return (
    <aside
      className="p-4"
      style={{
        width: "300px",

        minWidth: "300px",

        height: "100vh",

        overflowY: "auto",

        background: "var(--rightpanel)",

        borderLeft: "1px solid var(--border)",
      }}
    >
      <h5 className="fw-bold mb-4">

        Today's Overview

      </h5>

      <CalendarCard />

      <QuickNoteCard />

      <StatsCard />

    </aside>
  );
}

export default RightPanel;