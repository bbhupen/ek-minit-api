const utility = require('./utility')

module.exports.question1 = async (req, res) => {
  try {
    let list1 = Object.values(req.body)[0]
    let list2 = Object.values(req.body)[1]
    console.log(list1)

    list1 = await utility.shuffle(list1)
    list2 = await utility.shuffle(list2)

    const result = {
      list1,
      list2,
    }
    console.log(result)
    res.json(result)
  } catch (err) {
    res.send('Somthing went wrong')
    console.log(err)
  }
}
