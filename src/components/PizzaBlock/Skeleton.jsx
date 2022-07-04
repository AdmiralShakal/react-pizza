import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="133" cy="138" r="120" />
    <rect x="2" y="271" rx="0" ry="0" width="269" height="26" />
    <rect x="2" y="324" rx="0" ry="0" width="269" height="84" />
    <rect x="2" y="426" rx="9" ry="9" width="86" height="26" />
    <rect x="117" y="418" rx="17" ry="17" width="145" height="42" />
  </ContentLoader>
);

export default Skeleton;
