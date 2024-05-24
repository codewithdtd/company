import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JsonData from "../data/data.json";


export const CaseStudiesDetail = () => {
  const { id } = useParams();
  const [landingPageData, setLandingPageData] = useState({});
  const [data, setData] = useState(null);
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  useEffect(() => {
    if (landingPageData.Gallery) {
      const filteredData = landingPageData.Gallery.filter((item) => item.id.toString() === id);
      setData(filteredData[0] || null);
    }
  }, [id, landingPageData]);
  return (
    <div id="caseStudies-detail">
       {data ? 
       <div className='content container'>
          <h2 className='section-title'>{data.title}</h2>
          <p>{data.text}</p>
          <img src={`../${data.smallImage}`} alt={data.title} />
        </div>
      : <div className='content'>
          <h2 className='section-title'>NOT FOUND</h2>
        </div>
        }
    </div>
  )
}
