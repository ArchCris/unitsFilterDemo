import {data} from './assets/data.js'

const getInputs = () => {
  let typeSelection = document.querySelector('input[name="type"]:checked').value
  let widthSelection = Number(document.querySelector('input[name="width"]:checked').value)
  let heightSelection = Number(document.querySelector('input[name="height"]:checked').value)
  let depthSelection = Number(document.querySelector('input[name="depth"]:checked').value)
  console.log(typeSelection,widthSelection)
  handleChange([{type:typeSelection},{width:widthSelection},{height:heightSelection},{depth:depthSelection}])
}

document.getElementById("getUnits").addEventListener("click", getInputs);
const outputTable = document.getElementById("outputTable")

const handleChange = (array) => {
  outputTable.innerHTML+=''
  let result = null
  for (let i = 0; i < array.length; i++) {
    let property = Object.getOwnPropertyNames(array[i])[0]
    console.log(property,array[i][property])
    if(result==null){
      result = data.filter(unidad=>unidad[property]===array[i][property])
    }else{
      result = result.filter(unidad=>unidad[property]===array[i][property])
    }
  }
  result.forEach(node=>{
    outputTable.innerHTML+=
    `<tr>
      <td>${node.code}</td>
      <td>${node.width}</td>
      <td>${node.height}</td>
      <td>${node.depth}</td>
      <td>${node.page}</td>
    </tr>`
    console.log(node)
  })
  console.log(result)
}

