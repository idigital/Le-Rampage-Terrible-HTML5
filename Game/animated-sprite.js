AnimatedSprite.prototype = new Sprite();

function AnimatedSprite(filename, x, y, frameWidth, frameHeight, numFrames)
{
  this.m_filename = filename;

  this.m_image = new Image();
  this.m_image.src = filename;

  this.m_x = x;
  this.m_y = y;
  this.m_width = frameWidth;
  this.m_height = frameHeight;


  this.m_numFrames = numFrames;

  this.m_currentFrame = 0;

  this.SetFrame = function(frame)
  {

  }

  this.NextFrame = function()
  {
    this.m_currentFrame += 1;

    if(this.m_currentFrame >= m_numFrames)
    {
      this.m_currentFrame = 0;
    }
  }
};

AnimatedSprite.prototype.Draw = function(context)
{
  var _offset = m_witdh * m_currentFrame;

  context.drawImage(m_image, 0, 0, m_width, m_height,
                    m_x + _offset, 0, m_width, m_height);
};

