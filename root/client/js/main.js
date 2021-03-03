// const auth = 
const numberInput = document.getElementById('to');
const fromInput = document.getElementById('from');
const contentInput = document.getElementById('content');
const button = document.getElementById('button');
const response = document.querySelector('.response');

button.addEventListener('click', async () => {
    const number = numberInput.value;
    // numberInput.value.replace(/\D/g, '');
    //make sure there's no non-numeric values
    const content = contentInput.value;
    const from= fromInput.value;
    let data = await fetch('http://localhost:3006/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {"data": 
                [{
                    to: number, 
                    from: from,
                    content: content
                }]
            }
        )
    });

    console.log(await data.json());
    // console.log(await data.json.content());
});

