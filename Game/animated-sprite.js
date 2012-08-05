AnimatedSprite.prototype = new Sprite();

function AnimatedSprite(image, frameWidth, frameHeight, numFrames)
{
  this.m_image = image;

  this.m_width = frameWidth;
  this.m_height = frameHeight;

  this.m_numFrames = numFrames;

  this.m_currentFrame = 0;

  this.m_loop = false;
  this.m_timeLength;
  this.m_animationTimeElapsed = 0;

  this.SetFrame = function(frame)
  {
    if(frame < 0)
    {
      frame = 0;
    }
    else if(frame >= this.m_numFrames)
    {
      frame = this.m_numFrames - 1;
    }

    this.m_currentFrame = frame;
  }

  this.NextFrame = function()
  {
    this.m_currentFrame += 1;

    if(this.m_currentFrame >= m_numFrames)
    {
      this.m_currentFrame = 0;
    }
  }

  this.Update = function(dt)
  {
    this.m_animationTimeElapsed += dt;

    if(this.m_animationTimeElapsed >= this.m_timeLength && this.m_loop == true)
    {
      this.m_animationTimeElapsed -= this.m_timeLength;
    }
    else if(this.m_animationTimeElapsed >= this.m_timeLength
            && this.m_loop == false)
    {
      this.m_animationTimeElapsed = this.m_timeLength;
    }

    //Calculate the length of each frame.
    var _frameLength = this.m_timeLength / this.m_numFrames;

    //Get frame that the current time is in.
    var _frame = this.m_animationTimeElapsed / _frameLength;
    _frame = Math.floor(_frame);

    SetFrame(_frame);
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

