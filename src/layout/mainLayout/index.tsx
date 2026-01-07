import React, { useState, useEffect, useMemo } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import scssStyle from './mainLayou.module.scss'
import { BarChartOutlined, FolderOpenOutlined, MessageOutlined } from "@ant-design/icons"
import { MenuItemId, type MenuItem } from './types'
import classNames from "classnames"

// 待做：应该把menu组件封装出去

const initialMenuList: MenuItem[] = [
  {
    title: '情报看板',
    desc: '查看订阅和分析报告',
    id: MenuItemId.INFO_DASHBOARD,
    icon: <BarChartOutlined />,
    toPath: '/mainLayout/infoDashboard'
  },
  {
    title: '文献管理',
    desc: '管理和搜索上传的文件数据',
    id: MenuItemId.LITERATURE_ADMIN,
    icon: <FolderOpenOutlined />,
    toPath: '/mainLayout/literatureAdmin'
  },
  {
    title: 'AI科研助手',
    desc: '与AI模型进行智能对话交流',
    id: MenuItemId.AI_RESEARCH_ASSISTANT,
    icon: <MessageOutlined />,
    toPath: '/mainLayout/aiResearchAssistant',
    contentStyle: { padding: 0 }
  },
]

export default function MainLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  const initMenu = initialMenuList.find(menu => menu.toPath === location.pathname)?.id || MenuItemId.INFO_DASHBOARD

  const [menuList,setMenuList] = useState(initialMenuList)
  const [activeMenu, setActiveMenuItem] = useState<MenuItemId>(initMenu)
  
  const handleClickMenu = (menu: MenuItem) => {
    setActiveMenuItem(menu.id)
    navigate(menu.toPath)
  }

  const [activeLineTop, setActiveLineTop] = useState(0)
  useEffect(() => {
    const menuItem = document.querySelector(`.${scssStyle['menu-item']}`)
    const index = menuList.findIndex(menu => menu.id === activeMenu)
    setActiveLineTop(index * menuItem!.clientHeight + index * 5) 
  },[activeMenu,menuList])
  useEffect(() => {
    const menuItem = document.querySelector(`.${scssStyle['menu-item']}`)
    const line = document.querySelector(`.${scssStyle['active-ine']}`) as HTMLElement
    line.style.height = menuItem!.clientHeight + 'px'
  },[])

  const getCurrentMenu = () => {
    return menuList.find(menu => menu.id === activeMenu)
  }

  return (
    <div className={scssStyle.container}>
      <div className={scssStyle.menu}>
        <div className={scssStyle['menu-list']}>
          <div className={scssStyle['active-ine']} style={{ top: activeLineTop + 'px' }}></div>
          {
            menuList.map((menu) => (
              <div 
                key={menu.id} 
                className={classNames(scssStyle['menu-item'], (activeMenu === menu.id) && scssStyle.active)}
                onClick={handleClickMenu.bind(null, menu)}
              >
                <div className={scssStyle['menu-icon']}>
                  {menu.icon}
                </div>
                <div className={scssStyle['menu-content']}>
                  <div className={scssStyle["menu-title"]}>
                    {menu.title}
                  </div>
                  <div className={scssStyle["menu-desc"]}>
                    {menu.desc}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={scssStyle.content} style={ getCurrentMenu()?.contentStyle || {} }>
        <Outlet />
      </div>
    </div>
  )
}