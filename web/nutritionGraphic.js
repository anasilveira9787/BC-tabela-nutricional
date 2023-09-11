export function createRow(colored, total) {

    const newRow = []

    for (var i = 0; i < total; i++) {
        newRow.push(`<div class="cel"></div>`)
    };    

    if (colored != 0) {
           newRow.splice(0, colored)
                for (var i = 0; i < colored; i++) {
                    newRow.unshift(`<div class="cel colored"></div>`)
                };

        }; 
        
        console.log(newRow)

        return newRow.join("")

    }

    

   


