<?php 
  //Leer json
  $json = file_get_contents('./dist/manifest.json');
  $json_data = json_decode($json, true);
  $css = $json_data["src/main.jsx"]["css"][0];
  $js = $json_data["src/main.jsx"]["file"];
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <script type="module" src="/@vite/client"></script>
  <script type="module">
    import RefreshRuntime from "http://localhost:3000/@react-refresh"
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
  </script>

  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/Images/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ships Docs</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Finlandica:ital,wght@0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  <style>
    html,
    body {
      font-family: 'Finlandica', sans-serif;
    }
  </style>
  <link rel="stylesheet" href="./<?php echo $css; ?>" />

</head>

<body>
  <div id="root"></div>
  <script type="module" src="./<?php echo $js; ?>"></script>
</body>

</html>