+++
title = "Schedular"
date = 2025-07-31
description = """
Schedular/queueing algorithims
"""
[taxonomies]
tags = ["Schedular", "queueing","interactive","Rust"]
+++

<script type="module">
  import init from './simulation.js'
  init().catch((error) => {
    if (!error.message.startsWith("Using exceptions for control flow, don't mind me. This isn't actually an error!")) {
      throw error;
    }
  }).finally(
    console.log("done")
  );
</script>
<canvas id="mygame-canvas"></canvas>
