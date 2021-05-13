<script>
function MakeArray(n) {
this.length = n
for (i = 0;i<n;i++) 
   this[i] = null
}
green = new MakeArray(10)
g = 0
a = true

green[1] = "#006000"
green[2] = "#007000"
green[3] = "#008000"
green[4] = "#009000"
green[5] = "#00A000"
green[6] = "#00B000"
green[7] = "#00C000"
green[8] = "#00D000"
green[9] = "#00E000"
green[10] = "#00F000"

function greenizer() {
if(a == true) {
g++
}
if(g==11) {
g--
a = false
}

if(g==1) {
g++
a = true
}

if(a == false) {
g--
}
document.bgColor = green[g]
setTimeout ("greenizer()",100)
}
</script>
