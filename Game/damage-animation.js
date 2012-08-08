function DamageAnimation(filename, image, x, y, frameWidth, frameHeight, numFrames)
{
  this.m_animation = new AnimatedSprite(filename, image, frameWidth,
                                        frameHeight,
                                        numFrames);

  this.m_audio;

  this.m_x = x;
  this.m_y = y;
  
  this.Update = function(dt)
  {
    this.m_animation.Update(dt);
  }

  this.Draw = function(context, screenX, screenY, scale)
  {
    this.m_animation.Draw(context, this.m_x, this.m_y, screenX, screenY, scale);
  }
};

