import React from 'react'

const Video = () => {
  return (
    <div>
      <h1>Reprodutor de Vídeo</h1>
      <video width="640" height="360" controls>
        <source src="caminho/do/seu/video.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  )
}

export default Video