import React from 'react';

type LayoutProps = {
  children?: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div style={{backgroundColor: 'aliceblue'}}>
    <div style={{fontSize: '32px'}}>this is new version of remote1 component</div>
    <div style={{fontSize: '32px'}}>this is new version of remote1 component</div>
    <div style={{fontSize: '32px'}}>this is new version of remote1 component</div>
    <div style={{fontSize: '32px'}}>this is new version of remote1 component</div>
    {children}
  </div>;
};

export default Layout;
