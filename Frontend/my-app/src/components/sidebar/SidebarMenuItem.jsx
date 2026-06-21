function SidebarMenuItem({

  icon,

  title,

  active = false,

}) {

  return (

    <li

      className={`

        sidebar-item

        d-flex

        align-items-center

        mb-2

        ${active ? "sidebar-active" : ""}

      `}
    >

      <i

        className={`${icon} fs-5`}

      ></i>

      <span

        className="ms-3"

      >

        {title}

      </span>

    </li>

  );
}

export default SidebarMenuItem;