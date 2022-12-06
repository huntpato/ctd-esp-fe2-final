import { FC } from 'react';
import useToggle from '../../../hooks/useToggle';
import Modal from '../Modal/Modal';
import { INoticiasNormalizadas } from '../types';
import {
  BotonLectura,
  DescripcionTarjetaNoticia,
  FechaTarjetaNoticia,
  ImagenTarjetaNoticia,
  TarjetaNoticia,
  TituloTarjetaNoticia,
} from '../styled';

interface NewsCardProps {
  news: INoticiasNormalizadas;
}

const NewsCard: FC<NewsCardProps> = ({ news }) => {
  const { isOpen, toggle } = useToggle();

  return (
    <>
      <TarjetaNoticia>
        <ImagenTarjetaNoticia src={news.imagen} />
        <TituloTarjetaNoticia>{news.titulo}</TituloTarjetaNoticia>
        <FechaTarjetaNoticia>{news.fecha}</FechaTarjetaNoticia>
        <DescripcionTarjetaNoticia>
          {news.descripcionCorta}
        </DescripcionTarjetaNoticia>
        <BotonLectura onClick={() => toggle()}>Ver más</BotonLectura>
      </TarjetaNoticia>
      {isOpen && <Modal news={news} toggle={toggle} />}
    </>
  );
};

export default NewsCard;