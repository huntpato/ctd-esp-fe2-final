import { useEffect, useState } from 'react';
import { obtenerNoticias } from './fakeRest';
import NewsCard from './NewsCard/NewsCard';
import { ContenedorNoticias, ListaNoticias, TituloNoticias } from './styled';
import { NormalizedNews } from './utils';

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((n) => {
        return NormalizedNews(n);
      });

      setNoticias(data);
    };

    obtenerInformacion();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <NewsCard key={n.id} news={n} />
        ))}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
