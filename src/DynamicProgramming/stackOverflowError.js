let i = 0;

const recursiveFn = ()=> {
    i ++;
    recursiveFn();
}
 try{
    recursiveFn()
 }catch(err){
    console.log(`i = ${i}, error: ${err}`)
 }
 /*
 output:
    i = 20956, error: RangeError: Maximum call stack size exceeded
 */