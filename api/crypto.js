const charTables = () => {
  chars = []
  for (let i = 0; i < 94; i++) {
    chars.push(String.fromCharCode(i + 32))
  }
  return chars
}

const charLimit = code => code < 0 ? code + 94 : code

const formula = number => {
  const result = 3.14 * (number * number)
  return parseInt(result % 94)
}

const encrypt = data => {
  let encrypted = ''
  for(let i = 0; i < data.length; i++) {
    const char = data.charAt(i)
    for(let j = 0; j < 94; j++) {
      if(charTables()[j] == char) {
        index = charLimit(j + formula(i)) % 94
        encrypted += charTables()[index]
      }
    }
  }
  return encrypted
}

const decrypt = data => {
  let decrypted = ''
  for(let i = 0; i < data.length; i++) {
    const char = data.charAt(i)
    for(let j = 0; j < 94; j++) {
      if(charTables()[j] === char) {
        index = charLimit(j - formula(i)) % 94
        decrypted += charTables()[index]
      }
    }
  }
  return decrypted
}

module.exports = { encrypt, decrypt }