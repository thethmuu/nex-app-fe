import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from 'react-pro-sidebar'

import 'react-pro-sidebar/dist/css/styles.css'

import PayrollIcon from '../icons/sidebar/payroll'
import EmployeesIcon from '../icons/sidebar/employees'
import ClientsIcon from '../icons/sidebar/clients'
import UsersIcon from '../icons/sidebar/users'
import PromotionIcon from '../icons/sidebar/promotion'
import ResignationIcon from '../icons/sidebar/resignation'
import TerminationIcon from '../icons/sidebar/termination'
import SettingIcon from '../icons/sidebar/setting'
import LogoutIcon from '../icons/sidebar/logout'
import ProfileIcon from '../icons/sidebar/profile'
import DashboardIcon from '../icons/sidebar/dashboard'

const Sidebar = ({ menuCollapse }) => {
  return (
    <ProSidebar collapsed={menuCollapse}>
      <SidebarHeader css={styles.sidebarHeader}>
        <Menu>
          <MenuItem icon={<img src="/images/icon.svg" />}>NexStack</MenuItem>
        </Menu>
      </SidebarHeader>
      <SidebarContent css={styles.sidebarContent}>
        <Menu>
          <MenuItem icon={<DashboardIcon />}>
            <Link href="/">
              <a>Dashboard</a>
            </Link>
          </MenuItem>
          <SubMenu title="Payroll" icon={<PayrollIcon />}>
            <MenuItem>
              <Link href="/payroll/employeeSalary">
                <a>Employee Salary</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/payroll/payslip">
                <a>Payslip</a>
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu title="Employees" icon={<EmployeesIcon />}>
            <MenuItem>
              <Link href="/employees">
                <a>All Employees</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/employees/holidays">
                <a>Holidays</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/employees/leaves">
                <a>Leaves</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/employees/leaveSetting">
                <a>Leaves Setting</a>
              </Link>
            </MenuItem>
            <MenuItem>
              {' '}
              <Link href="/employees/attendance">
                <a>Attendance</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/employees/departments">
                <a>Departments</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/employees/designations">
                <a>Designations</a>
              </Link>
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<ClientsIcon />}>
            <Link href="/clients">
              <a>Clients</a>
            </Link>
          </MenuItem>
          <SubMenu title="Users" icon={<UsersIcon />}>
            <MenuItem>
              <Link href="/users/userRequests">
                <a>User Requests</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/users">
                <a>Users</a>
              </Link>
            </MenuItem>
          </SubMenu>
          <MenuItem>
            <img src="/images/separator.svg" />
          </MenuItem>
          <MenuItem icon={<PromotionIcon />}>
            <Link href="/promotion">
              <a>Promotion</a>
            </Link>
          </MenuItem>
          <MenuItem icon={<ResignationIcon />}>
            <Link href="/resignation">
              <a>Resignation</a>
            </Link>
          </MenuItem>
          <MenuItem icon={<TerminationIcon />}>
            <Link href="/termination">
              <a>Termination</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <img src="/images/separator.svg" />
          </MenuItem>
          <SubMenu title="Setting" icon={<SettingIcon />}>
            <MenuItem>
              <Link href="/setting/companySetting">
                <a>Company Setting</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/setting/localization">
                <a>Localization</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/setting/rolesPermissions">
                <a>Roles & Permissions</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/setting/notification">
                <a>Notification</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/setting/changePassword">
                <a>Change Password</a>
              </Link>
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter css={styles.sidebarFooter}>
        <Menu>
          <MenuItem icon={<ProfileIcon />}>
            <Link href="/admin">
              <a>
                Ken Ling <br /> Admin
              </a>
            </Link>
          </MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  )
}

const styles = {
  sidebarHeader: css`
    height: 66px;
    background: var(--background);
    color: black;
    font-size: 18px;
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
  `,
  sidebarContent: css`
    background: var(--background);
    color: var(--dark-gray);
    font-family: 'Open Sans';
    font-size: 14px;
  `,
  sidebarFooter: css`
    background: var(--background);
    color: var(--dark-gray);
    font-family: 'Open Sans';
    font-size: 14px;
  `,
}

export default Sidebar
