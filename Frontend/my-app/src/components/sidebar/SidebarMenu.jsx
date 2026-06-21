import SidebarMenuItem from "./SidebarMenuItem";

function SidebarMenu() {

  const menuItems = [

    {

      icon: "bi bi-journal-text",

      title: "All Notes",

      active: true,

    },

    {

      icon: "bi bi-calendar",

      title: "Calendar",

    },

    {

      icon: "bi bi-archive",

      title: "Archive",

    },

    {

      icon: "bi bi-trash",

      title: "Trash",

    },

  ];

  return (

    <ul className="list-unstyled">

      {

        menuItems.map((item) => (

          <SidebarMenuItem

            key={item.title}

            icon={item.icon}

            title={item.title}

            active={item.active}

          />

        ))

      }

    </ul>

  );
}

export default SidebarMenu;