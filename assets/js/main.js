(function() {

  var loader = document.getElementById('loader');

  var config = [
    {
      button: document.getElementById('loader-default'),
      className: 'loader-default'
    },
    {
      button: document.getElementById('loader-default-half'),
      className: 'loader-default',
      attributes: [
        { attribute: 'data-half' }
      ]
    },
    {
      button: document.getElementById('loader-default-blink'),
      className: 'loader-default',
      attributes: [
        { attribute: 'data-blink' },
        { attribute: 'data-text' }
      ]
    },
    {
      button: document.getElementById('loader-default-inverse'),
      className: 'loader-default',
      attributes: [
        { attribute: 'data-inverse' }
      ]
    },
    {
      button: document.getElementById('loader-default-text'),
      className: 'loader-default',
      attributes: [
        { attribute: 'data-text' }
      ]
    },
    {
      button: document.getElementById('loader-default-custom-text'),
      className: 'loader-default',
      attributes: [
        {
          attribute: 'data-text',
          value: document.getElementById('custom-text')
        }
      ]
    },
    {
      button: document.getElementById('loader-double'),
      className: 'loader-double'
    },
    {
      button: document.getElementById('loader-bar'),
      className: 'loader-bar'
    },
    {
      button: document.getElementById('loader-bar-rounded'),
      className: 'loader-bar',
      attributes: [
        { attribute: 'data-rounded' }
      ]
    },
    {
      button: document.getElementById('loader-bar-inverse'),
      className: 'loader-bar',
      attributes: [
        { attribute: 'data-inverse' }
      ]
    },
    {
      button: document.getElementById('loader-bar-text'),
      className: 'loader-bar',
      attributes: [
        { attribute: 'data-text' }
      ]
    },
    {
      button: document.getElementById('loader-bar-blink'),
      className: 'loader-bar',
      attributes: [
        { attribute: 'data-blink' },
        { attribute: 'data-text' }
      ]
    },
    {
      button: document.getElementById('loader-bar-custom-text'),
      className: 'loader-bar',
      attributes: [
        {
          attribute: 'data-text',
          value: document.getElementById('bar-custom-text')
        }
      ]
    },
    {
      button: document.getElementById('loader-bar-ping-pong'),
      className: 'loader-bar-ping-pong'
    },
    {
      button: document.getElementById('loader-bar-ping-pong-rounded'),
      className: 'loader-bar-ping-pong',
      attributes: [
        { attribute: 'data-rounded' }
      ]
    },
    {
      button: document.getElementById('loader-border'),
      className: 'loader-border'
    },
    {
      button: document.getElementById('loader-border-text'),
      className: 'loader-border',
      attributes: [
        { attribute: 'data-text' }
      ]
    },
    {
      button: document.getElementById('loader-border-custom-text'),
      className: 'loader-border',
      attributes: [
        {
          attribute: 'data-text',
          value: document.getElementById('border-custom-text')
        }
      ]
    },
    {
      button: document.getElementById('loader-border-blink'),
      className: 'loader-border',
      attributes: [
        { attribute: 'data-text' },
        { attribute: 'data-blink' }
      ]
    },
    {
      button: document.getElementById('loader-ball'),
      className: 'loader-ball'
    },
    {
      button: document.getElementById('loader-ball-shadow'),
      className: 'loader-ball',
      attributes: [
        { attribute: 'data-shadow' }
      ]
    },
    {
      button: document.getElementById('loader-bouncing'),
      className: 'loader-bouncing'
    },
    {
      button: document.getElementById('loader-smartphone'),
      className: 'loader-smartphone'
    },
    {
      button: document.getElementById('loader-smartphone-text'),
      className: 'loader-smartphone',
      attributes: [
        { attribute: 'data-screen' }
      ]
    },
    {
      button: document.getElementById('loader-smartphone-custom-text'),
      className: 'loader-smartphone',
      attributes: [
        {
          attribute: 'data-screen',
          value: document.getElementById('smartphone-custom-text')
        }
      ]
    },
    {
      button: document.getElementById('loader-clock'),
      className: 'loader-clock'
    },
    {
      button: document.getElementById('loader-curtain'),
      className: 'loader-curtain'
    },
    {
      button: document.getElementById('loader-curtain-brazilian'),
      className: 'loader-curtain',
      attributes: [
        { attribute: 'data-brazilian' }
      ]
    },
    {
      button: document.getElementById('loader-curtain-colorful'),
      className: 'loader-curtain',
      attributes: [
        { attribute: 'data-colorful' }
      ]
    },
    {
      button: document.getElementById('loader-curtain-custom-text'),
      className: 'loader-curtain',
      attributes: [
        {
          attribute: 'data-curtain-text',
          value: document.getElementById('curtain-custom-text')
        }
      ]
    },
    {
      button: document.getElementById('loader-music-hey-oh'),
      className: 'loader-music',
      attributes: [
        { attribute: 'data-hey-oh' }
      ]
    },
    {
      button: document.getElementById('loader-music-no-cry'),
      className: 'loader-music',
      attributes: [
        { attribute: 'data-no-cry' }
      ]
    },
    {
      button: document.getElementById('loader-music-we-are'),
      className: 'loader-music',
      attributes: [
        { attribute: 'data-we-are' }
      ]
    },
    {
      button: document.getElementById('loader-music-rock-you'),
      className: 'loader-music',
      attributes: [
        { attribute: 'data-rock-you' }
      ]
    },
    {
      button: document.getElementById('loader-pokeball'),
      className: 'loader-pokeball'
    }
  ];

  var timer;
  
  // Bindings
  loader.addEventListener('click', function() {
    for (var i = this.attributes.length - 1; i >= 0; i--){
      if(this.attributes[i].name !== 'id') {
        this.removeAttribute(this.attributes[i].name);
      }
    }
    clearTimeout(timer);  
  });

  for(var i = 0; i < config.length; i++) {
    
    (function(i) {

      config[i]['button'].addEventListener('click', function() {
        
        // Attributes
        if(config[i]['attributes']) {
          for(var j = 0; j < config[i]['attributes'].length; j++ ) {

            var tempAttribute = config[i]['attributes'][j];
            var tempValue = tempAttribute['value'] ? tempAttribute['value'].value : '';

            loader.setAttribute(tempAttribute['attribute'], tempValue);
          }
        }

        // Show loader
        loader.classList.add('loader', config[i]['className'], 'is-active')
        
        // Hide loader after some time
        hideLoader(config[i]['className'], config[i]['attributes'] ? config[i]['attributes'] : []);
      });

    })(i);

  }

  function hideLoader(param, attr) {
    timer = setTimeout(function() {
      loader.classList.remove('is-active', param, 'loader');
      for(var k = 0; k < attr.length; k++) {
        loader.removeAttribute(attr[k]['attribute']);
      }
    }, 5000);
  }

  // Hash
  
  if(window.location.hash) {
    var loaderHash = window.location.hash.split('#/')[1];
    var event = document.createEvent('HTMLEvents');

    event.initEvent('click', true, false);
    document.getElementById(loaderHash).dispatchEvent(event);
    setTimeout(function() {
      history.pushState('', document.title, window.location.pathname);
    }, 2000);

  }

})();