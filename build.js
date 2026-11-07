const fs = require("fs"), path = require("path");
const dir = __dirname;
const files = fs.readdirSync(path.join(dir, "data")).filter(f => /^\d\d-.*\.js$/.test(f)).sort();
const data = files
  .map(f => "<script>\n" + fs.readFileSync(path.join(dir, "data", f), "utf8").replace(/<\/script/gi, "<\/script") + "\n</script>")
  .join("\n");
const html = fs.readFileSync(path.join(dir, "src.html"), "utf8").replace("<!--DATA-->", data);
fs.writeFileSync(path.join(dir, "항공우주_백과사전.html"), html);
fs.writeFileSync(path.join(dir, "index.html"), html);
console.log("built", files.length, "chapters,", (html.length / 1024).toFixed(0) + "KB");
