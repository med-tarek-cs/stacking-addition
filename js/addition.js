function checkSum() {

  const lines = document.querySelectorAll('.line')

  nums = []
  lines.forEach(line => nums.push(parseLine(line)))

  indexOfResult = nums.length - 1
  sum = 0
  for (let i = 0; i < indexOfResult; i++) {
    sum = sum + nums[i]
  }

  sum == nums[indexOfResult] ? alert('أحسنت ') : alert(' خطأ')

}

function parseLine(line) {
  const numberss = line.querySelectorAll('.main-number')

  num = ''
  numberss.forEach(n => {
    num = num + n.innerHTML
  })

  return parseInt(num)
}