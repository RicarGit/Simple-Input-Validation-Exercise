/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que vimos até aqui =)
*/

const input = document.querySelector('#username')
const form = document.querySelector('form')
const button = document.querySelector('.button')

const inputFeedback = document.createElement('p')
const submitFeedback = document.createElement('p')

const regex = /^[a-zA-ZçÇ]{6,}$/
const isValidInput = inputValue => regex.test(inputValue)

const insertFeedbackElement = (element, position, feedbackElement) =>
  element.insertAdjacentElement(position, feedbackElement)

const insertAttributeToElement = (element, attribute, attributeValue) =>
  element.setAttribute(attribute, attributeValue)

insertAttributeToElement(submitFeedback, 'data-feedback', 'submit-feedback')

const feedbackMessage = (element, message) => element.textContent = message

const clearInput = ({ target }) => {
  target.username.value = ''
  target.username.focus()
}

const removeSubmitParagraph = () => {
  const submitParagraphFeedbackExists = document
    .querySelector('[data-feedback="submit-feedback"]')

  if (submitParagraphFeedbackExists) {
    submitFeedback.remove()
  }
}

const showInputInfo = event => {
  const inputValue = event.target.value
  removeSubmitParagraph()

  if (isValidInput(inputValue)) {
    feedbackMessage(inputFeedback, "Username válido =)")
    insertAttributeToElement(inputFeedback, 'class', 'username-sucess-feedback')
    insertFeedbackElement(input, 'afterend', inputFeedback)
    return
  }

  feedbackMessage(inputFeedback, 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas')
  insertAttributeToElement(inputFeedback, 'class', 'username-help-feedback')
  insertFeedbackElement(input, 'afterend', inputFeedback)
}

const showSubmitInfo = event => {
  event.preventDefault()
  const inputValue = event.target.username.value

  if (isValidInput(inputValue)) {
    feedbackMessage(submitFeedback, "Dados enviados =)")
    insertAttributeToElement(submitFeedback, 'class', 'submit-sucess-feedback')
    insertFeedbackElement(button, 'afterend', submitFeedback)
    clearInput(event)
    return
  }

  feedbackMessage(submitFeedback, "Por favor, insira um username válido")
  insertAttributeToElement(submitFeedback, 'class', 'submit-help-feedback')
  insertFeedbackElement(button, 'afterend', submitFeedback)
  clearInput(event)
}

input.addEventListener('input', showInputInfo)
form.addEventListener('submit', showSubmitInfo)

/*
01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter:
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.

  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa
        6;
    2) Pesquisar no MDN.

  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const some = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      return true
    }
  }

  return false
}

const result = some([1, 2, 3], item => item > 2)
const result2 = some([1, 3, 5], item => item === 0)

console.log(result)
console.log(result2)