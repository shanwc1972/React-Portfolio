import { useState } from 'react';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDossier = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dossier-container ${isOpen ? 'open' : ''}`}>
      {/* Dossier Cover */}
      <div className="dossier-cover">
        <h2>Dossier subject:<br />WARREN CRAIG SHAN</h2>
        <button className="open-button" onClick={toggleDossier}>
          {isOpen ? 'Close Dossier' : 'Open Dossier'}
        </button>
      </div>

      {/* Dossier Content */}
      <div className="dossier-content">
        <div className="dossier-details">
          <article>
            NAME: Warren Craig Shan<br />
            DATE OF BIRTH: 10th June 1972<br />
            NATIONALITY: Australian<br />
            EYE COLOR: Brown<br />
            GENDER: Male<br />
            OCCUPATION: Datacenter Technical Specialist<br />
            <br />
            INFORMATION<br />
            1. Attended Macquarie University in Australia with a major in Computer Science<br />
            2. Served as a computer specialist for the US Department of State between 2001 and 2009<br />
            3. Conferred the U.S. Department of State Meritorious Medal in 2006<br />
            4. Published a novel titled Abandoned in 2015.
          </article>
        </div>
        <div className="dossier-photo">
          <img src="/assets/images/warrenshan.jpeg" alt="Warren Craig Shan portrait" />
        </div>
      </div>
    </div>
  );
}