const redes = ["Facebook", "Twitter", "Instagram", "TikTok",
"YouTube"];

let minus= redes.forEach(red => red.toLowerCase()).filter(minus => minus.length>7);
console.log(minus);