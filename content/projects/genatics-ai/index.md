+++
title = "Genetics test"
date = 2025-07-31
description = """
Genetics algorithim
"""
[taxonomies]
tags = ["AI", "Genatics","interactive","Rust"]
+++
<head>
    <link data-trunk rel="rust" data-wasm-opt="2" />
    <!-- this is the base url relative to which other urls will be constructed. trunk will insert this from the public-url option -->
    <base data-trunk-public-url />

</head>
<script type="module">
  import init from './mygame.js'
  init().catch((error) => {
    if (!error.message.startsWith("Using exceptions for control flow, don't mind me. This isn't actually an error!")) {
      throw error;
    }
  }).finally(
    console.log("done")
  );
</script>

<canvas id="mygame-canvas">
</canvas>
