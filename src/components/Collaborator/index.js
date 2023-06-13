import React, { useState } from 'react';
import './Collaborator.css';

const Collaborator = ({ nome, cargo, imagem, background }) => {
  const [imagemErro, setImagemErro] = useState(false);

  const handleImagemErro = () => {
    setImagemErro(true);
  };

  if (!imagem || imagemErro) {
    imagem = '../images/perfil.png';
  }

  return (
    <div className='collaborator'>
      <div className='cabecalho' style={{ backgroundColor: background }}>
        <img src={imagem} alt={nome} onError={handleImagemErro} />
      </div>
      <div className='rodape'>
        <h5>{nome}</h5>
        <h4>{cargo}</h4>
      </div>
    </div>
  );
};

export default Collaborator;
