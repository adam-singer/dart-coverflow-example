#import('dart:html');

class coverflow {
  var radius = 20;
  var side = 250;
  var long_side = 700;
  var offset = 6;
  var display_offset = 6;
  List<Map> queue;
  var flipping = false;
  bool currPoped = false; 
  int imagesLoaded=0;
  
  coverflow() {
    queue = new List<Map>();
  }

  createCanvasElement(var img) {
    CanvasElement canvas = new Element.tag('canvas');
    canvas.attributes['width']=side;
    canvas.attributes['height']=side;
    
    var _height = img.naturalHeight;
    var _width  = img.naturalWidth;
    var w = false; // width is shorter?
    if (_height > _width) { 
      w = true;
    }
    
    var sx, sy, sw, sh, _side;
    if (w) {
      _side = _width;
      sx = 0;
      sy = _height / 2 - _side / 2;
    } else {
      _side = _height;
      sx = _width / 2 - _side / 2;
      sy = 0;
    }
    
    sw = _side;
    sh = _side;

    var cx = canvas.getContext('2d');
    cx.beginPath();
    cx.moveTo(radius, 0);
    cx.lineTo(canvas.width - radius, 0);
    cx.quadraticCurveTo(canvas.width, 0, canvas.width, radius);
    cx.lineTo(canvas.width, canvas.height - radius);
    cx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - radius, canvas.height);
    cx.lineTo(radius, canvas.height);
    cx.quadraticCurveTo(0, canvas.height, 0, canvas.height - radius);
    cx.lineTo(0, radius);
    cx.quadraticCurveTo(0, 0, radius, 0);
    cx.clip();
    cx.drawImage(img, sx, sy, sw, sh, 0, 0, side, side);
    
    canvas.on.click.add((MouseEvent event) {
      if (!currPoped) {
        currPoped = true;
        popup(img);
      }  else {
        popdown();
      }
    }, false);
    
    return canvas;
  }
  
  /*
   * show popup image
   */
  popup(var img) {
    
      var _height = img.naturalHeight;
      var _width  = img.naturalWidth;
      var w = false; // width is shorter?
      if (_height > _width) {
        w = true;
      }
      
      var sx, sy, sw, sh;
      if (w) {
        sh = long_side;
        sw = (long_side / _height * _width);
      } else {
        sh = (long_side / _width * _height);
        sw = long_side;
      }

      ImageElement _img = new Element.html('<img/>');
      
      _img.attributes['src'] = img.src;
      _img.attributes['width'] = sw;
      _img.attributes['height'] = sh;
      _img.attributes['id'] = 'zoom';
      _img.style.margin =  (((long_side/2)-sh)/2).toString()+'px '+((985-sw)/2).toString()+'px';
      _img.style.opacity = "0";
      
      _img.on.click.add((var event) {
        popdown();
      });
      
      document.query('#zoom_container').nodes.add(_img);
      document.query('#zoom_container').hidden = false;
      document.window.setTimeout(() {
        _img.style.opacity = 1;
      }, 10); 
  }
  
  /*
   * hide popup image
   */
  popdown() {
    try {
      if (document.query('#zoom') is Element) {
        document.query('#zoom').style.opacity = 0;
        //currPoped = false;
      }
      
      document.window.setTimeout(() {
        if (document.query('#zoom') is Element) {
          document.query('#zoom').remove();
          document.query('#zoom_container').hidden = true;
          currPoped = false;
        }
      }, 500);
    } catch (ex) {
      print("popdown exception ${ex}");
    }
  }
  
  /*
   * create flow object and push into queue
   */
  slide(var diff) {
    
      var _offset = offset + diff;
      
      ElementList li = document.queryAll('#coverflow li');
      
      if (_offset > 6 || _offset < (li.length - 7) * -1) { 
        return false;
      }
      
      move(diff * -1);
      offset = _offset;
      
      InputElement input = document.query('#range');
      input.valueAsNumber = _offset * -1;
      
      if (!flipping) {
        flip();
      }
    
  }
  
  /*
   * creates multiple flow objects by range movement and push into queue
   */
  move(var diff) {
    popdown();
    var abs = diff < 0 ? diff * -1 : diff;
    var vector = 1;
    if (diff > 0)  {
      vector = -1;
    }
    
    for (var i = 0; i < abs; i++) {
      var flow = {'vector': vector, 'speed': 0.03};
      queue.add(flow);
    }
    return true;
  }
  
  /*
   * pop flow object from queue and excute flip motion.
   */
  flip() {
    var flow = queue[0];
    if (flow == null) {
      flipping = false;
      return;
    }
    
    queue.removeRange(0, 1);
    
    flipping = true;
    var _offset = display_offset + flow['vector'];
    var speed = 0.05;
    if (queue.length < 4)  {
      speed = 0.1;
    }
    
    if (queue.length < 2) { 
      speed = 0.2;
    }
    
    var canvas = document.query('#coverflow li');
    ElementList el = document.queryAll('#coverflow li');
    var index=0;
    for (var e in el) {
      var order = index + _offset;
      if (order <= 0) {
        e.attributes['class']='img coverflow0';
      } else if (order > 11) {
        e.attributes['class']='img coverflow12';
      } else {
        e.attributes['class']='img coverflow'+(order).toString();
      }
      index++;
    }
    
    display_offset = _offset;
    document.window.setTimeout(() {
      flip();
    }, speed * 1000 + 30);
  }
  
  /*
   * initialization
   */
  init() {
    var index=0;
    for (var i in document.queryAll('#dummy img')) {
      var canvas = createCanvasElement(i);
      var li = new Element.html('<li class="img"/>');
      var order = index + 6;
      if (order <= 11) {
        li.classes.add('coverflow'+order);
      } else {
        li.classes.add('coverflow12');
      }
      li.nodes.add(canvas);
      document.query('#coverflow').nodes.add(li);
      index++;
    }
    
    document.query('#left').on.click.add((var event) {slide(1);}, false);
    document.query('#right').on.click.add((var event) {slide(-1);}, false);
    
    InputElement input = document.query('#range');
    input.on.change.add((var event) {
      var range = input.value;
      move(Math.parseInt(range) + offset);
      offset = range * -1;
      if (!flipping) {
        flip();
      }
    },false);
    
    window.on.keyDown.add((KeyboardEvent event) {
      if (event.keyCode === 27) { popdown(); }
      if (event.keyCode === 39) { slide(-1); }
      if (event.keyCode === 37) { slide(1); }
    }, false);
    
    document.query('#zoom_container').style.left = "0px";
    document.query('#zoom_container').style.display = "block";
  }
  
  void loadImages() {
    var dummy = document.query('#dummy');
    for (int i=1; i<=20; i++) {
      ImageElement img = new Element.tag('img');      
      img.on.load.add((var event) {
        imagesLoaded++;
        if (imagesLoaded==20) {
          document.window.setTimeout(() {
            init();
          }, 100);
        }
      }, false);
      img.src = "./images/${i}.jpg";
      dummy.nodes.add(img);
    }
  }
  
  void run() {
    loadImages();
  }
}

void main() {
  new coverflow().run();
}
