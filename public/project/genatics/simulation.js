async function loadWasm(name) {
  const useBrotli = 
    typeof window !== "undefined" && 
    window.navigator.userAgent.includes("Chrome");

  const url = useBrotli ? `${name}.br` : name;
  
  const response = await fetch(url, {
    headers: useBrotli ? { "Accept-Encoding": "br" } : {}
  });
  console.log(response)
}

async function init() {
  const { instance } = await loadWasm("simulation_bg.wasm");
}
