const button = document.querySelector('#button')

const dictionary = ['제로초'];
button.addEventListener('click', () => {
    console.log(dictionary)
    let wordTag = document.querySelector('#word')
    let word = wordTag.textContent
    // .은 ~의를 의미하는 것 같다.
    let inputTag = document.querySelector('#input')
    let errorTag = document.querySelector('#error')
    let input = inputTag.value
    // console.log(`input : ${input}`)
    word = dictionary[dictionary.length - 1]
    if (dictionary.includes(input)) {
        errorTag.textContent = '중복입니다'
    } else {
        if (word[word.length - 1] === input[0]) {
            console.log(`${word[word.length -1]}, ${input[0]}`)
            wordTag.textContent = `정답: ${input}`
            errorTag.textContent = ''
            inputTag.value = ''
            inputTag.focus()
            dictionary.push(input)
        } else {
            console.log(`${word[word.length -1]}, ${input[0]}`)
            errorTag.textContent = '땡'
            inputTag.value = ''
            inputTag.focus()
        }
    }
})