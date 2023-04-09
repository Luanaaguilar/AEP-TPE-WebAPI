export const cep = () => {
    const inputCep = document.querySelector<HTMLInputElement>('#cep')
    // const output = document.querySelector('output')
    const form = document.querySelector('form')
    
    if (inputCep && form) {
      inputCep.oninput = () => {
    
        // 1 
        const removeLetras = /\D/g
        // 2
        const formataCep = /(\d{5})(\d{3})/
    
        inputCep.value = inputCep.value
          .replace(removeLetras, '')
          .replace(formataCep, '$1-$2')
      }
    
      inputCep.onblur = () => {
        const cep = inputCep.value
    
        if (cep.length === 9 && cep.indexOf('-') === 5) {
          const api = `https://brasilapi.com.br/api/cep/v1/${inputCep.value}`
          fetch(api)
            .then((response) => response.json())
            .then((data) => {
              if (data.cep) {
                console.log(data);
                console.log(cep);    
                
                localStorage.setItem('Cep',inputCep.value)
                localStorage.setItem('Cidade',data.city)
                localStorage.setItem('Estado',data.state)
    
              } else {
                console.log("O CEP INFORMADO NÃO FOI ENCONTRADO");   
              }
            })
        }
      }
    }
}

// 1 - O D siginifica NÃO numérico - aqui ele está fazendo um raplace em todos os dígitos não numéricos por vazio
// 2 - Máscara para o formatar o CEP no campo quando a pessoa digitar o cep