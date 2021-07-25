const shuffle = (list) => {
  list = list.sort((a, b) => {
    return Math.random() - 0.5
  })
  return list
}

module.exports = { shuffle }
