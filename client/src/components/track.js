import React, { useEffect, useState } from 'react';
import './track.scss';

const Track = () => {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        
        const timeline = document.querySelector(".timeline-container");
        const timelineHeight = timeline.offsetHeight;
        const timelineTop = timeline.offsetTop;
        const scrollDistance = window.pageYOffset + window.innerHeight;
        const scrollPercent = (scrollDistance - timelineTop) / timelineHeight;
        const newLineHeight = scrollPercent * timelineHeight;

        setLineHeight(newLineHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="scroll-line" style={{ height: `${lineHeight}px` }} />;
};

export default Track;
