"use strict";function logCRP(){var t=window.performance.timing,o=t.domContentLoadedEventStart-t.domLoading,n=t.domComplete-t.domLoading,e=document.getElementById("crp-stats");e.textContent="DCL: "+o+"ms, onload: "+n+"ms"}window.addEventListener("load",function(t){logCRP()});
//# sourceMappingURL=maps/perfmatters.js.map
