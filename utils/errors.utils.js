module.exports.signUpErrors = err => {
  let errors = { pseudo: '', email: '', password: '' }

  if (err.message.includes('pseudo')) errors.pseudo = 'Pseudo incorrect'

  if (err.message.includes('email')) errors.email = 'Email incorrect'

  if (err.message.includes('password')) errors.password = 'Password incorrect'

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
    errors.pseudo = 'Pseudo some error'

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
    errors.email = 'Email some error'

  return errors
}

module.exports.signInErrors = err => {
  let errors = { email: '', password: '' }

  if (err.message.includes('email')) errors.email = 'Email incorrect'

  if (err.message.includes('password')) errors.password = 'Password incorrect'

  return errors
}

module.exports.uploadErrors = err => {
  let errors = { format: '', maxSize: '' }

  if (err.message.includes('invalid file')) errors.format = 'Incorrect Format'

  if (err.message.includes('max size')) errors.maxSize = 'The file is too large'

  return errors
}
