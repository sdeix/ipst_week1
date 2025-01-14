function fragmentation(suma: number): Record<number, number> {
    const bills: number[] = [100, 50, 10, 5, 2, 1];
  
    const result: Record<number, number> = {};
  
    for (let bill of bills) {
      const count = Math.floor(suma / bill);
      if (count > 0) {
        result[bill] = count;
        suma -= count * bill;
      }
    }
  
    return result;
  }
  
  console.log(fragmentation(104399));
  