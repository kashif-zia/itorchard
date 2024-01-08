import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';

const SidebarCompanyTabs = ({social_media}) => {
  const [activeTab, setActiveTab] = useState('highlights');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const highlightsSection = document.getElementById('highlights');
      const reviewSection = document.getElementById('review');

      const sections = [
        { id: 'highlights', ref: highlightsSection },
        { id: 'review', ref: reviewSection },
        // Add more sections as needed
      ];

      const offsetThreshold = 100; // Adjust as needed

      const activeSection = sections.find(({ ref }) => {
        if (ref) {
          const offsetTop = ref.offsetTop;
          const offsetBottom = offsetTop + ref.offsetHeight;
          const isNearTop = window.scrollY >= offsetTop - offsetThreshold;
          const isNearBottom = window.scrollY <= offsetBottom - offsetThreshold;
          return isNearTop && isNearBottom;
        }
        return false;
      });

      if (activeSection) {
        setActiveTab(activeSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-100'>
      <div className='company-sideNavbar'>
        <div className='flex-column sidebarNav'>
          <Nav.Item>
            <Link
              href='#highlights'
              className={`company-sidebar-Navitem ${activeTab === 'highlights' ? 'active' : ''}`}
              onClick={() => handleTabClick('highlights')}
            >
               <span className="icon"> <svg className='highligh-svg'>
                <use xlinkHref='/assets/images/svg/icons.svg#companyhighlight'></use>
              </svg></span>
              <span className='highlight-item-text'>Highlights</span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              href='#review'
              className={`company-sidebar-Navitem ${activeTab === 'review' ? 'active' : ''}`}
              onClick={() => handleTabClick('review')}
            >
              <span className="icon"> <svg className='review-svg'>
                <use xlinkHref='/assets/images/svg/icons.svg#companyreview'></use>
              </svg></span>
              <span className='highlight-item-text'>Reviews</span>
            </Link>
          </Nav.Item>
        </div>
        {social_media && <div className='social-icons'>
          {social_media?.facebook && <a href={social_media?.facebook}>
            <svg className='social-icon-item facebook'>
              <use xlinkHref='/assets/images/svg/icons.svg#fbicon'></use>
            </svg>
          </a>}
         {social_media.pinterest &&  <a href=''>
            <svg className='social-icon-item pinterest'>
              <use xlinkHref='/assets/images/svg/icons.svg#pinteresticon'></use>
            </svg>
          </a>}
         {social_media.linkedin &&  <a href={social_media.linkedin}>
            <svg className='social-icon-item linkedin'>
              <use xlinkHref='/assets/images/svg/icons.svg#linkedinicon'></use>
            </svg>
          </a>}
        </div>}
      </div>
    </div>
  );
};

export default SidebarCompanyTabs;
