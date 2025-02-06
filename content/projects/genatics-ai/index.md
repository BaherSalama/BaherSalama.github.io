+++
title = "Genetics test"
date = 2025-07-31
description = """
Genetics algorithim
"""
[taxonomies]
tags = ["AI", "Genatics","interactive","Rust"]
+++

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
