import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { BioContainer, BioImage, BioName, BioDescription, ButtonContainer, BioButton } from "./styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BioButton 
        aria-label={nombre}      
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive={(bioActiva.id === nombre) as boolean}
      >
        {nombre}
      </BioButton>
    ));
  };

  return (
    <BioContainer>
      <ButtonContainer>{crearBotones()}</ButtonContainer>
      <BioImage src={bioActiva.image} alt={bioActiva.nombre}/>
      <div>
        <BioName>{bioActiva.nombre}</BioName>
        <BioDescription>{bioActiva.descripcion}</BioDescription>
      </div>
    </BioContainer>
  );
};

export default Bio;
