const START_ASCII = 32, END_ASCII = 94

const charTables = () => {
  chars = []
  for (let i = 0; i < END_ASCII; i++) {
    chars.push(String.fromCharCode(i + START_ASCII))
  }
  return chars
}

const charLimit = code => code < 0 ? code + END_ASCII : code

const formula = (key, num) => {
  const 
    secretKey = 'sutangadingfadhillahnasution',
    r = (num + key) * secretKey.length
    result = 3.14 * (r * r)
  return parseInt(result % END_ASCII)
}

const encrypt = data => {
  let encrypted = ''
  for(let i = 0; i < data.length; i++) {
    const char = data.charAt(i)
    for(let j = 0; j < END_ASCII; j++) {
      if(charTables()[j] == char) {
        index = charLimit(j + formula(data.length, i)) % END_ASCII
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
    for(let j = 0; j < END_ASCII; j++) {
      if(charTables()[j] === char) {
        index = charLimit(j - formula(data.length, i)) % END_ASCII
        decrypted += charTables()[index]
      }
    }
  }
  return decrypted
}

module.exports = { encrypt, decrypt }