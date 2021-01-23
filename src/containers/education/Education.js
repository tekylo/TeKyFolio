import React from 'react';
import './Education.css';
import EducationCard from '../../components/educationCard/EducationCard';
import { educationInfo } from '../../portfolio';

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Educación</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, i) => (
            <EducationCard key={i} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
