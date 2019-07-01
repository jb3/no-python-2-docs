
let srg_res = document.querySelectorAll(".srg > .g");

let srg = document.querySelector(".srg");
let bkWMgd =  document.querySelector(".bkWMgd");

let bkWMgd_res = document.querySelectorAll(".bkWMgd > .g");

let results = [];

srg_res.forEach((v) => results.push(v));
bkWMgd_res.forEach((v) => results.push(v));

console.log(results.length)

for (let i = 0; i < results.length; i++) {
  let result = results[i];

  let link = result.querySelectorAll("a")[0];

  if (link.href.startsWith("https://docs.python.org/2/")) {
    console.log(link.href)
    try {
      srg.removeChild(result);
    } catch(e) {
      console.log("not srg")
    };

    try {
      bkWMgd.removeChild(result);
    } catch(e) {
      console.log("not bkWMgd")
    };
  }
}
