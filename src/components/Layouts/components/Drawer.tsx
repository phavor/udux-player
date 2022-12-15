import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import { Layout, Menu } from "antd"
import React, { useState } from "react"

const { Sider } = Layout

export const Drawer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width="295">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </Sider>
  )
}