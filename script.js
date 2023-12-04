const box = document.querySelector('#box');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Work with the JSON data
        console.log(data);
        let html = ``;
        for (const content of data) {
            html += `
            <div class="myContainer">
                <h5 class="containerTitle">${content.topic}</h5>
                <div class="containerBody">
                ${
                    content.data.map(data => {
                        return (`
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${data.question}</h5>
                                    <hr>
                                    <p class="card-text">${data.answer}</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">${content.topic}</small>
                                </div>
                            </div>
                            <br />
                        `)
                        }
                    ).join('')  
                }
                </div>
            </div>
            <br />
            `
        }
        box.innerHTML = html
    })
    .catch(error => console.error('Error fetching data:', error));


