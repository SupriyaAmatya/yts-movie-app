import React from 'react'


const DownloadModal = (props) => {
  const { downloadModal, closeDownloadModal, torrents } = props
  const torrentList = torrents ? (
    torrents.map((torrent, index) => {
      return (
        <div className="modal-torrent" key={index}>
          <div className="modal-quality">{torrent.quality}</div>
          <p className="quality">{torrent.type}</p>
          <p>File size</p>
          <p className="file-size">{torrent.size}</p>
          <p><a href={torrent.url}>Download</a></p>
        </div>
      )
    })
  ) : null
  return (
    <div className={downloadModal ? 'download-modal modal-active' : 'download-modal'} onClick={() => closeDownloadModal()}>
      <div className="modal-container">
        <div className="modal-title">
          <h2>Select movie quality</h2>
        </div>
        <div className="modal-close" onClick={() => closeDownloadModal()}> X </div>
        <div className="modal-content">
          {torrentList}
        </div>
      </div>
    </div>
  )

}


export default DownloadModal
