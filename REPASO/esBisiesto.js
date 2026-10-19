function esBisiesto(anio){
    return ((anio%4=== 0 && anio%100 !==0)|| anio%400 ===0)
   
    }

    console.log(esBisiesto(2100))
