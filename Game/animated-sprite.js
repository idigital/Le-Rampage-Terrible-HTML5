AnimatedSprite.prototype = new Sprite();

function AnimatedSprite(filename, frameWidth, frameHeight, numFrames)
{
  this.m_filename = filename;

  this.m_image = new Image();
  this.m_image.src = filename;

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

  this.DrawFrame = function(context, frame, x, y, screenX, screenY)
  {
    //Check frame is in bounds.
    if(frame >= 0 && frame < this.m_numFrames)
    {
      var _offset = this.m_width * frame;

      context.drawImage(this.m_image, _offset, 0, this.m_width, this.m_height,
                        x - screenX, y - screenY, this.m_width, this.m_height);
    }
  }
};

AnimatedSprite.prototype.Draw = function(context, x, y, screenX, screenY)
{
  var _offset = m_witdh * m_currentFrame;

  context.drawImage(this.m_image, _offset, 0, this.m_width, this.m_height,
                    x - screenX, y - screenY, this.m_width, this.m_height);
};

