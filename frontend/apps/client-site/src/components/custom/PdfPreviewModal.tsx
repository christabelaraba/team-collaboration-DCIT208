import { useState } from 'react';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf';

const PdfPreviewModal = ({ isOpen, onRequestClose, pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState('');  

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError('');
  };

  const onDocumentLoadError = (error) => {
    console.error('Failed to load PDF:', error);
    setError('Failed to load PDF.');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="PDF Preview"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          padding: 0,    // Remove padding to make full use of space
          overflow: 'hidden' // Ensure the content fills the modal without overflow
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      <button onClick={onRequestClose} style={{ float: 'right', margin: '10px' }}>Close</button>
      <div style={{ height: 'calc(100% - 40px)', overflow: 'auto' }}>
        {error ? (
          <p>{error}</p>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            {Array.from(new Array(numPages), (_el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={window.innerWidth * 0.8} // Adjust to ensure it fits within the modal
              />
            ))}
          </Document>
        )}
      </div>


    </Modal>
  );
};

export default PdfPreviewModal;