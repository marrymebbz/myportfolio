import React from 'react';
import wordpress from '../images/tools/nocode/wordpress.png';
import wix from '../images/tools/nocode/wix.png';
import squarespace from '../images/tools/nocode/squarespace.png';
import woocommerce from '../images/tools/nocode/woocommerce.png';
import shopify from '../images/tools/nocode/shopify.png';

function NoCodeProjects() {
  return (
    <div className="d-flex gap-3 mt-3 justify-content-center align-items-center flex-wrap">
      <img src={wordpress} alt="Content Management System – No Code WordPress Tool" style={{ height: '45px' }} />
      <img src={wix} alt="Content Management System – No Code WIX Tool" style={{ height: '35px' }} />
      <img src={squarespace} alt="Content Management System – No Code Squarespace Tool" style={{ height: '45px' }} />
      <img src={woocommerce} alt="Content Management System – No Code Woocommerce Tool" style={{ height: '50px' }} />
      <img src={shopify} alt="Content Management System – No Code Shopify Tool" style={{ height: '50px' }} />
    </div>
  );
}

export default NoCodeProjects;
