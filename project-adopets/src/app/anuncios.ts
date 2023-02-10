export interface IAnuncios {
  id : number,
  titulo : string,
  tipoAnimal : string,
  raca : string,
  porte : string,
  sexo : string,
  localizacao : string,
  descricao: string
  imagem : string,
}

export const anuncios = [
  { id : 1,
    titulo : 'Mel',
    tipoAnimal : 'Cachorro',
    raca : 'Vira-lata',
    porte : 'porte-média',
    sexo : 'fêmea',
    localizacao : 'Coruripe-AL',
    descricao : '',
    imagem : '/assets/anuncios/img1.jpg'
  },
  { id : 1,
    titulo : 'Mel',
    tipoAnimal : 'Cachorro',
    raca : 'Vira-lata',
    porte : 'porte-média',
    sexo : 'fêmea',
    localizacao : 'Coruripe-AL',
    descricao : '',
    imagem : '/assets/anuncios/img1.jpg'
  }
]