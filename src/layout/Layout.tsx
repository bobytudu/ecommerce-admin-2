import { Outlet } from "react-router-dom";
import Topbar from "./ResponsiveTopbar";

export default function Layout() {
  return (
    <div>
      <Topbar>
      <Outlet />
      </Topbar>
    </div>
  );
}
