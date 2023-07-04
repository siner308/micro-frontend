import React from 'react';

type Props = {
  children?: React.ReactNode;
};
const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <div style={{backgroundColor: 'aliceblue'}}>
    <div style={{fontSize: '32px'}}>this is new version of remote2 component</div>
    {children}
    <div>

    </div>
  </div>;
};

export default Layout;
