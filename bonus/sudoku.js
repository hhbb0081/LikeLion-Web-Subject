// 전역 변수로 선언 
var cells = document.getElementsByTagName('input');

function isFilled()
{
    for(let i=0; i<cells.length; i++)
    {
        if(cells[i].value=='') 
        {
            return false; 
        } 
    }
    return true; 
}

function Check() {
    // row(행)
    for(let row=0; row<9; row++)
    {
        let arr = [] ;
        for(let col=0; col<9; col++)
        {
            arr.push(cells[9*row+col].value) ;
        }
        for(let i=1; i<10; i++)
        {
            if(!arr.includes(String(i))){
                return false ; 
            }
        }
        
    }
    // column(열)
    for(let col = 0; col<9; col++)
    {
        let arr = []; 
        for(let row=0; row<9; row++)
        {
            arr.push(cells[col+row*9].value) ;
        }
        for(let i=1; i<10; i++)
        {
            if(!arr.includes(String(i))){
                return false ; 
            }
        }
    }
    // 그뭐냐 3*3
    for(let row = 0; row<9; row+=3)
    {
        for(let col=0; col<9; col+=3)
        {
            let arr = [] ; 
            for(let i=row; i<row+3; i++)
            {
                for(let j = col ; j<col+3; j++)
                {
                    arr.push(cells[i*9+j].value);
                }
            }
            for(let i = 1; i<10; i++)
            {
                if(!arr.includes(String(i))) return false ; 
            }
        }
    }
    return true ;
}

function result()
{
    if(!isFilled()) 
    {
        alert("Fill in all blanks");
        return ; 
    }
    else {
        if(!Check()) alert("Try again");
        else {
            alert("Congratulation!"); 
        }
    }
}