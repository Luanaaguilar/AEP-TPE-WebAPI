export function formatData<T>(form: HTMLFormElement) {
    const data = new FormData(form)
    const value = Object.fromEntries(data.entries())
    return value as unknown as T
  }

  // Está pegando todos os dados do formulário e transformando isso em JSON, quanndo chamado função 'formataData' lá no main.ts 
  // 'Object.fromEntries(data.entries())' -> Transforma os dados de HTML em JSON