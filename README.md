# jquery.blink
jquery blink plugin

##Example

```html
<html>
  <head>
    <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    <script src="jquery.blink.js"></script>
    
    <script>
    
      $(document).ready(function() {
      
        $('.blink').blink({delay: 200});
      
      });
    
    </script>
  
  </head>
  <body>
  
    <span class="blink">this</span> is some <span class="blink">blinking</span> text.
  
  </body>
</html>
```

##Options

delay

    Number of milliseconds the element is visible and hidden.
