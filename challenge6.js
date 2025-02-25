const salesEarningsCalc = ( obj ) => {
    let itemASales, itemBSales, itemCSales, itemDSales, totalSales = 0;
    for ( let item in obj ) {
       if ( item === `a` ) {
        itemASales = obj[item] * 239.99;
        totalSales += itemASales;
       } else if ( item === `b`) {
        itemBSales = obj[item] * 129.75;
        totalSales += itemBSales;
       } else if ( item === `c`) {
        itemCSales = obj[item] * 99.95;
        totalSales += itemCSales;
       } else if ( item === `d`) {
        itemDSales = obj[item] * 350.89;
        totalSales += itemDSales;
       }

    }

    let printTotalSales = `total sales:`;
    if ( itemASales ) {
     printTotalSales += ` ${ itemASales }`;
    } if ( itemBSales ) {
     printTotalSales += ` + ${ itemBSales }`;
    } if ( itemCSales ) {
     printTotalSales += ` + ${ itemCSales }`;
    } if ( itemDSales ) {
     printTotalSales += ` + ${ itemDSales.toFixed(2) }`;

    }

    let totalEarning = Number(totalSales.toFixed(2) * 0.09) + 200;
    console.log(`challenge 6: ${printTotalSales} = ${totalSales.toFixed(2)}
total earning: 200 + ${(Number(totalSales.toFixed(2) * 0.09)).toFixed(2)} = ${totalEarning.toFixed(2)}`);
    
    
}

salesEarningsCalc({
    a: 12,
    b: 20,
    d: 2,
  })
salesEarningsCalc({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  })
salesEarningsCalc({
    a: 23,
    d: 15
  })