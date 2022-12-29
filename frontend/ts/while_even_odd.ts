let n:number = 0;
const bool: boolean = Boolean(parseInt(`0x0${n}`));

while (bool === false) {
	while (n <= 10){
		n++;
		console.log(n);
		
		if(0 == (n % 2)) {
			console.log(`A volta ${n} é par`);
		} else(0 != (n % 2)) {
			console.log(`A volta ${n} é ímpar`);
		}
	}
	break;
}
