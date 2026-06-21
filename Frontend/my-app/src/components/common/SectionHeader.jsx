import Tabs from "./Tabs";
import { useState } from "react";

function SectionHeader({ title }) {
  const [activeTab, setActiveTab] =
    useState("today");
  return (
    <div className="mb-4 mt-4">

      <h4>

        {title}

      </h4>
      <Tabs

        activeTab={activeTab}

        setActiveTab={setActiveTab}

      />

    </div>
  );
}

export default SectionHeader;