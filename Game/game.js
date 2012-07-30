var FPS = 30;
var SECONDS_BETWEEN_FRAMES = 1 / FPS;

var canvasWidth = 900;
var canvasHeight = 600;

var game;
var mouseX = 0, mouseY = 0;
var leftClick = false;
var leftClickRegistered = false;
var leftReleaseRegistered = true;
var leftClickOccured = false;
var leftReleaseOccured = false;

window.onload = entryPoint;

function entryPoint()
{
  game = new Game().Initialise();
};

function Game()
{
  var m_startDate = new Date();
  var m_lastFrame = m_startDate.getTime();

  var canvas;
  var context2D;
  var backBuffer;
  var backBufferContext2D;

  var m_level;

  var m_editMode = false;
  var m_editor;
  var m_editorButton;
  var m_editorBounds;

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

    m_level = new Level();

    m_editor = new Editor(m_level);
    m_editorButton = new Sprite("images/editButton.png", 32, 32);
    m_editorBounds = new BoundingBox(null, canvasWidth - 32, 0, 32, 32);

    canvas.onmousemove = this.MouseMove;
    canvas.onmousedown = this.MouseDown;
    canvas.onmouseup = this.MouseUp;

    setInterval(this.Update, SECONDS_BETWEEN_FRAMES);

    return this;
  };

  this.Update = function()
  {
    //Caluclate the time since the last frame.
    var _date = new Date();
    var _thisFrame = _date.getTime();
    var _dt = (_thisFrame - m_lastFrame) / 1000;
    m_lastFrame = _thisFrame;

    //Clear the drawing contexts.
    backBufferContext2D.clearRect(0, 0, backBuffer.width, backBuffer.height);
    context2D.clearRect(0, 0, canvas.width, canvas.height);

    //Reset click values.
    leftClickOccured = false;
    leftReleaseOccured = false;

    //Detect left click when it first occurs and handle event.
    if(leftClick == true && leftClickRegistered == false)
    {
      //Register that this click has been detected and handled.
      leftClickRegistered = true;

      //Prepare to respond to left click release.
      leftReleaseRegistered = false;

      leftClickOccured = true;
    }

    //Detect left click release.
    if(leftClick == false && leftReleaseRegistered == false)
    {
      //Register that this release has been detected and handled.
      leftReleaseRegistered = true;

      //Prepare to respond to next left click.
      leftClickRegistered = false;

      leftReleaseOccured = true;
    }

    if(leftClickOccured == true
       && m_editorBounds.CheckForPointCollision(mouseX, mouseY))
    {
      if(m_editMode == true)
      {
        m_editMode = false;
      }
      else if(m_editMode == false)
      {
        m_editMode = true;
      }

      leftClickOccured = false;
    }

    if(m_editMode == true)
    {
      m_editor.Update(_dt, mouseX, mouseY,
                      leftClickOccured, leftReleaseOccured);

      m_editor.Draw(backBufferContext2D);
    }
    else
    {
      m_level.Update(_dt, mouseX, mouseY,
                     leftClickOccured, leftReleaseOccured);

      m_level.Draw(backBufferContext2D);
    }

    m_editorButton.Draw(backBufferContext2D, canvas.width - 32, 0, 0, 0);

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

