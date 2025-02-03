<body>

  <h1>Adding an Image Dynamically</h1>
  <div id="image-container"></div>

  <script>
    var img = document.createElement('img');

    img.src = 'solar.jpg';
    
    img.alt = 'Left';
    img.width = 300;

    document.getElementById('image-container').appendChild(img);
  </script>

</body>
