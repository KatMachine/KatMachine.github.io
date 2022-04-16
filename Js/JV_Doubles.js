const url = 'https://script.google.com/macros/s/AKfycbyZ6QaxpupmWoOV3F5q9z2h7tAX86tsajxZURnmImYNY-A9EgJhL-82K-mLs3V141kb/exec';
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
        var j = 1;
        console.log(res);
        res.data.forEach((row) =>
            {
                console.log(row);
                const table = document.createElement('div');
                output1.append(table);
                table.innerHTML=`${row[0]}  ${row[1]}  ${row[2]} <br>`;
                switch(j){
                  case 1:  
                    {
                        table.classList.add('box');
                        break;
                    }
                case 2:  
                    {
                        table.classList.add('box2');
                        break;
                    }
                case 3:  
                    {
                        table.classList.add('box3');
                        break;
                    }
                case 4:  
                    {
                        table.classList.add('box4');
                        break;
                    }
                case 5:  
                    {
                        table.classList.add('box5');
                        break;
                    }
                case 6:  
                    {
                        table.classList.add('box6');
                        break;
                    }
                case 7:  
                    {
                        table.classList.add('box7');
                        break;
                    }  
                case 8:  
                    {
                        table.classList.add('box8');
                        break;
                    }
                
                case 9:  
                    {
                        table.classList.add('box');
                        break;
                    }
                case 10:  
                    {
                        table.classList.add('box2');
                        break;
                    }
                case 11:  
                    {
                        table.classList.add('box3');
                        break;
                    }
                case 12:  
                    {
                        table.classList.add('box4');
                        break;
                    }
                case 13:  
                    {
                        table.classList.add('box5');
                        break;
                    }
                case 14:  
                    {
                        table.classList.add('box6');
                        break;
                    }
                case 15:  
                    {
                        table.classList.add('box7');
                        break;
                    }
                case 16:  
                    {
                        table.classList.add('box8');
                        break;
                    }
                case 17:  
                    {
                        table.classList.add('box');
                        break;
                    }
                case 18:  
                    {
                        table.classList.add('box2');
                        break;
                    }
                case 19:  
                    {
                        table.classList.add('box3');
                        break;
                    }
                case 20:  
                    {
                        table.classList.add('box4');
                        break;
                    }
                case 21:  
                    {
                        table.classList.add('box5');
                        break;
                    }
                case 22:  
                    {
                        table.classList.add('box6');
                        break;
                    }  
                case 23:  
                    {
                        table.classList.add('box7');
                        break;
                    }
                
                case 24:  
                    {
                        table.classList.add('box8');
                        break;
                    }
                case 25:  
                    {
                        table.classList.add('box');
                        break;
                    }
                case 26:  
                    {
                        table.classList.add('box2');
                        break;
                    }
                case 27:  
                    {
                        table.classList.add('box3');
                        break;
                    }
                case 28:  
                    {
                        table.classList.add('box4');
                        break;
                    }
                case 29:  
                    {
                        table.classList.add('box5');
                        break;
                    }
                case 30:  
                    {
                        table.classList.add('box6');
                        break;
                    }
                case 31:  
                    {
                        table.classList.add('box7');
                        break;
                    }
                }
                j=j+1;
            })

    }                                                          