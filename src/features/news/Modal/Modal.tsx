import { FC } from 'react';
import { INoticiasNormalizadas } from '../Noticias';
import {
  BotonSuscribir,
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from '../styled';
import { SuscribeImage, CloseButton as Close } from '../../../assets';

interface ModalProps {
  news: INoticiasNormalizadas;
  toggle: () => void;
}

const Modal: FC<ModalProps> = ({ news, toggle }) => {
  return (
    <>
      {news.esPremium ? (
        <ContenedorModal>
          <TarjetaModal>
            <CloseButton onClick={() => toggle()}>
              <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
            <CotenedorTexto>
              <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
              <DescripcionModal>
                Suscríbete a nuestro newsletter y recibe noticias de nuestros
                personajes favoritos.
              </DescripcionModal>
              <BotonSuscribir
                onClick={() =>
                  setTimeout(() => {
                    alert('Suscripto!');
                    toggle();
                  }, 1000)
                }
              >
                Suscríbete
              </BotonSuscribir>
            </CotenedorTexto>
          </TarjetaModal>
        </ContenedorModal>
      ) : (
        <ContenedorModal>
          <TarjetaModal>
            <CloseButton onClick={() => toggle()}>
              <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={news.imagen} alt="news-image" />
            <CotenedorTexto>
              <TituloModal>{news.titulo}</TituloModal>
              <DescripcionModal>{news.descripcion}</DescripcionModal>
            </CotenedorTexto>
          </TarjetaModal>
        </ContenedorModal>
      )}
    </>
  );
};

export default Modal;
