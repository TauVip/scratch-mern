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
