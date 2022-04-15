
const url = 'https://script.google.com/macros/s/AKfycbzqeFTxioYBW9YV5IbeNk0iDfh-DwibqPtV-SqemUe-fm5srhRGJrveNKsCScGFKxEO/exec';
const output = document.querySelector('.output');
const output1=document.createElement('div');

loadData();
window.setInterval(loadData,1000);
output.append(output1);

function loadData()
    {
    console.log('ready');
    fetch(url).then(rep => rep.json())
    .then((data)=>
        {
            output1.innerHTML = '';
            makeOutput(data);
        })
    }
       
function makeOutput(res)
    {
        console.log(res);
        res.data.forEach((row) =>
            {
                console.log(row);
                const table = document.createElement('div');
                output1.append(table);
                table.innerHTML=`${row[0]}  ${row[1]}  ${row[2]} <br>`;
                table.classList.add('box');
            })

    }                                                          