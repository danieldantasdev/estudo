const day = parseInt("10011", 2);
const month = parseInt("1011", 2);
const year = parseInt("11111100110", 2);

const DATE = new Date(year,month,day);
const dateFormat:string = (DATE.toLocaleString()).split('-').join("/").substring(0,10);

const getDate = ():boolean | string => {
if(DATE){
    const LOG = console.log("Lembrar pontos");
    return LOG;
    }
     return false || Boolean(0x00) || Boolean(0); 
}

getDate();
