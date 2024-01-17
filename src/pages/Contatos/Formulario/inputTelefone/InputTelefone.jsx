import React, { useState } from 'react';

const InputTelefone = () => {
  const [telefone, setTelefone] = useState('');

  const formatarTelefone = (input) => {
    // Remove todos os caracteres não numéricos
    const numeros = input.replace(/\D/g, '');

    // Aplica a máscara
    let formatoTelefone = '';
    if (numeros.length === 11) {
      formatoTelefone = `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    } else if (numeros.length === 10) {
      formatoTelefone = `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    } else {
      formatoTelefone = numeros;
    }

    return formatoTelefone;
  };

  const handleTelefoneChange = (e) => {
    const inputTelefone = e.target.value;
    setTelefone(formatarTelefone(inputTelefone));
  };

  return (
    <>
      <input
        placeholder="‎"
        type="tel"
        value={telefone}
        onChange={handleTelefoneChange}
        required
      />
      <label htmlFor="telefone">(DDD)-Telefone</label>
    </>
  );
};

export default InputTelefone;
