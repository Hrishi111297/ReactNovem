import React from 'react'
import PdfPreview from './PdfPreview'

function Grocery() {
  return (
    <div><h1>This is react component which will return the data of Grocery</h1>
    
    <PdfPreview documentId={1} />
    </div>
  )
}

export default Grocery