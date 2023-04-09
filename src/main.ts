import {cep} from './utilitarios/cep'
import './style.css'
import { formatData } from './utilitarios/format-data'

// 1
const app = document.querySelector<HTMLFormElement>('#form form')

if (app) {

  // 2
  app.onsubmit = (event) =>{
    event.preventDefault()
    console.log(formatData(app))
    // 3
    localStorage.setItem('Dados-Formulario',JSON.stringify(formatData(app)))
  }
  cep()
}

// 1 - '#form form' pois é uma div com o id 'form' e para selecionar a tag 'form' que está dentro da div 
// 2 - quando clicar no botão e executar o submit(onsubmit), (por padrão o botão já faz isso) vai executar essa função, que pegará 
//     o evento (atualizar a página) e vai cancelar ele (event.preventDefault), ou seja, não vai atualizar a página quando clicar 
//     no botão, possibilitanto assim, guardar os dados no localStorage
// 3 - Está pegando todos os dados do forms ( 'formataData(app)' ), transformando em JSON e jogando no localStorage com a chave 'Dados-Formulario'