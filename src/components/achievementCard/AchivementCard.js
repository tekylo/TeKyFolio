import React from 'react';

export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
  }

  return (

    <div className="certificate-card">
      <div className="certificate-image-div">
        <img src={cardInfo.image.default} alt="PWA" className="card-image" />
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => <p key={i} onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>)}
      </div>
    </div>
  );
}
