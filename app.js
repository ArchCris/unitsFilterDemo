import {data} from './assets/data.js'

const getInputs = () => {
  let typeSelection = document.querySelector('input[name="type"]:checked') ? document.querySelector('input[name="type"]:checked').value : null
  let widthSelection = document.querySelector('input[name="width"]:checked') ? Number(document.querySelector('input[name="width"]:checked').value) : null
  let heightSelection = document.querySelector('input[name="height"]:checked')? Number(document.querySelector('input[name="height"]:checked').value) : null
  let depthSelection = document.querySelector('input[name="depth"]:checked') ? Number(document.querySelector('input[name="depth"]:checked').value) : null
  let frontSelection = document.querySelector('input[name="front_type"]:checked') ? document.querySelector('input[name="front_type"]:checked').value : null
  handleChange([{type:typeSelection},{width:widthSelection},{height:heightSelection},{depth:depthSelection},{open_system:frontSelection}])
}

document.getElementById("getUnits").addEventListener("click", getInputs);
const outputTable = document.getElementById("outputTable")

const handleChange = (array) => {
  console.log(array)
  outputTable.innerHTML=''
  let result = null
  for (let i = 0; i < array.length; i++) {
    let property = Object.getOwnPropertyNames(array[i])[0]
    if(array[i][property]===null){
      console.log('no computa')
    }else{
      if(result==null){
        result = data.filter(unidad=>unidad[property]===array[i][property])
      }else{
        result = result.filter(unidad=>unidad[property]===array[i][property])
      }
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

