import { useEffect, useState } from 'react';
import { obtenerNoticias } from './fakeRest';
import NewsCard from './NewsCard/NewsCard';
import { ContenedorNoticias, ListaNoticias, TituloNoticias } from './styled';
import { INoticiasNormalizadas } from './types';
import { NormalizedNews } from './utils';

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((news) => {
        return NormalizedNews(news);
      });
      setNoticias(data);
    };
    obtenerInformacion();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;