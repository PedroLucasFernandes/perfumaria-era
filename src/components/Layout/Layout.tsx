import React from 'react';
import './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Perfumaria Era</h1>
      </header>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;