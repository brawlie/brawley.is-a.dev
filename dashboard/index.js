<link rel="stylesheet" href="https://timer.js.org/generate/style.css">
   <center>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code style="color:#4d88ff;  font-size: 20px; font-family: 'Source Sans Pro', sans-serif;"><div id="content"></div>
</code></pre></div></div></center>
<script>
      function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }
let code = getParameterByName('code');
document.getElementById("content").innerHTML = ` <iframe width="100%" height="100%" frameborder="0" src="https://NewEntireEquipment.meaxios.repl.co/${code}" />`
       

</script>
