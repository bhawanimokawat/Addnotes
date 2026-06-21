import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";

import FolderSection from "../components/floders/FolderSection";

import NotesSection from "../components/notes/NotesSection";

function Dashboard() {
  const [menu, setMenu] = useState("All Notes");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] =
    useState("today");

  const [selectedFolder,
    setSelectedFolder] =
    useState(null);

  return (

    <MainLayout

       

      search={search}

      setSearch={setSearch}

    >
      <FolderSection

        selectedFolder={
          selectedFolder
        }

        setSelectedFolder={
          setSelectedFolder
        }

      />

      <NotesSection

        selectedFolder={selectedFolder}

        search={search}

        activeTab={activeTab}

      />

    </MainLayout>

  );

}

export default Dashboard;