import Food from './Food.js';

const getFoods = (sort = 'name') => {
  console.log(sort)
  document.body.style.backgroundColor = 'pink'
  // fetch foods
  fetch('/api/foods?sort=' + sort, { "method": "GET" })
    .then(response => response.json())
    .then(response => {
        console.log("scoobydoo")
        console.log(response)
      $('#foodList').style.background = 'none'
      $('#foodList').innerHTML = ''
      response.forEach(data => {
        const food = new Food(data)
        food.render()
      })
    })
    .catch(error => console.log(error))
}

// getFoods()

// const upload = (theFile) => {
//   // dont upload if file is too big
//   if (theFile.size > 5 * 1024 * 1024) {
//     alert('Maximum file size is 5MB')
//   }
//   else {
//     const formData = new FormData()
//     formData.append('image', theFile)
//     fetch('/api/file', {
//       method: "POST",
//       body: formData
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         dishForm.elements['fileName'].value = data.fileName
//       })
//       .catch(error => console.log(error))
//   }
// }

// addBud.addEventListener('click', event => {
//   dishForm.reset()
//   $('body').scrollIntoView();
//   dishForm.style.display='block';
//   mainContent.style.display = 'none';
// })

// uploader.addEventListener('change', event => {
//   upload(event.target.files[0])
// })

// const formEvents = { 
//   submit: (event) => {
//     const formData = new FormData(event.target)
//     console.log("formData " + formData)
//     const json = Object.fromEntries(formData)
//     const food = new Food(json)
//     food.save()
//     event.target.reset()
//     console.log("118 submit")
//   },
//   // drag n drop
//   dragenter: (event) => { event.currentTarget.className = "ready" },
//   dragover: (event) => { event.currentTarget.className = "ready" },
//   dragleave: (event) => { event.currentTarget.className = "" },
//   drop: (event) => {
//     event.currentTarget.className = ""
//     upload(event.dataTransfer.files[0])
//   }
// }

// for (const [eventName, eventHandler] of Object.entries(formEvents)) {
//   dishForm.addEventListener(eventName, (event) => {
//     event.preventDefault()
//     event.stopPropagation()
//   })
//   dishForm.addEventListener(eventName, eventHandler)
// }

console.log("aaaaaaaaaaaaeeeeeee")