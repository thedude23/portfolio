import React, { ReactNode } from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  children: ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className = '' }) => {
  return <aside className={`${styles.sidebar} ${className}`}>{children}</aside>;
};

export default Sidebar;
