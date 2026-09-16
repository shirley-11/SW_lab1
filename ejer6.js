let contador = {
 cont: 0,
 siguiente() {
    return this.cont++;
 }

}

console.log(contador.siguiente())
// → 0
console.log(contador.siguiente())
// → 1
console.log(contador.siguiente())
// → 2
