import { useNavigate } from "react-router-dom";
import { menuItems } from "./MenuItems";
import { Menu } from "antd";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Menu
        defaultSelectedKeys={[window.location.pathname]}
        onClick={({ key }) => navigate(key)}
        items={menuItems}
        mode="horizontal"
      />
      {children}
    </div>
  );
};
export default Layout;
