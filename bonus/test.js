// 전역 변수로 선언 

var cells  = [
    5, 3, 4, 6, 7, 8, 9, 1, 2,
    6, 7, 2, 1, 9, 5, 3, 4, 8,
    1, 9, 8, 3, 4, 2, 5, 6, 7,
    8, 5, 9, 7, 6, 1, 4, 2, 3,
    4, 2, 6, 8, 5, 3, 7, 9, 1,
    7, 1, 3, 9, 2, 4, 8, 5, 6,
    9, 6, 1, 5, 3, 7, 2, 8, 4,
    2, 8, 7, 4, 1, 9, 6, 3, 5,
    3, 4, 5, 2, 8, 6, 1, 7, 9
  ];


function Check() {
    // row(행)
    for(let row=0; row<9; row++)
    {
        let arr = [] ;
        for(let col=0; col<9; col++)
        {
            arr.push(cells[9*row+col]) ;
        }
        for(let i=1; i<10; i++)
        {
            if(!arr.includes(i)){
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
            arr.push(cells[col+row*9]) ;
        }
        for(let i=1; i<10; i++)
        {
            if(!arr.includes(i)){
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
                    arr.push(cells[i*9+j]);
                }
            }
            for(let i = 1; i<10; i++)
            {
                if(!arr.includes(i)) return false ; 
            }
        }
    }
    return true ;
}

function result()
{
    if(!Check()) alert("Try again");
        else {
            alert("Congratulation!"); 
        }
}