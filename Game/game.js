var FPS = 30;
var SECONDS_BETWEEN_FRAMES = 1 / FPS;

var canvasWidth = 800;
var canvasHeight = 600;

var game;
var mouseX = 0, mouseY = 0;
var leftClick = false;

window.onload = entryPoint;

function entryPoint()
{
  game = new Game().Initialise();
};

function Game()
{
  this.m_lastFrame = new Date().getTime();

  var canvas;
  var context2D;
  var backBuffer;
  var backBufferContext2D;

  var sprite = new Sprite("images/MonsterIdle.png", 0, 0);

  this.Initialise = function()
  {
    //Initialise game variables.
    canvas = document.getElementById('c');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    //Check whether the browser supports getting canvas context.
    if(canvas && canvas.getContext)
    {
      context2D = canvas.getContext('2d');
      backBuffer = document.createElement("canvas");
      backBuffer.width = canvas.width;
      backBuffer.height = canvas.height;
      backBufferContext2D = backBuffer.getContext('2d');
      backBuffer.font = "bold 12px sans-serif";
    }

    canvas.onmousemove = this.MouseMove;
    canvas.onmousedown = this.MouseDown;
    canvas.onmouseup = this.MouseUp;

    setInterval(this.Draw, SECONDS_BETWEEN_FRAMES);

    return this;
  };

  this.Draw = function()
  {
    //Caluclate the time since the last frame.
    var _thisFrame = new Date().getTime();
    var _dt = (_thisFrame = this.m_lastFrame) / 1000;
    this.m_lastFrame = _thisFrame;

    //Clear the drawing contexts.
    backBufferContext2D.clearRect(0, 0, backBuffer.width, backBuffer.height);
    context2D.clearRect(0, 0, canvas.width, canvas.height);

    sprite.Draw(backBufferContext2D);

    backBufferContext2D.fillStyle = "Black";
    backBufferContext2D.fillText("Sample String", 10, 50);

    //Once done drawing, copy the back buffer to the displayed canvas.
    context2D.drawImage(backBuffer, 0, 0);
  };

  this.MouseMove = function(e)
  {
    //Get mouse position on the canvas.

    var _element = canvas;
    var _offsetX = 0;
    var _offsetY = 0;

    //Calculate offsets.
    if(_element.offsetParent)
    {
      do
      {
        _offsetX += _element.offsetLeft;
        _offsetY += _element.offsetTop;
      } while (_element = _element.offsetParent);
    }

      mouseX = e.pageX - _offsetX;
      mouseY = e.pageY - _offsetY;
  };


  this.MouseDown = function(e)
  {
    leftClick = true;
  };

  this.MouseUp = function(e)
  {
    leftClick = false;
  };
};

