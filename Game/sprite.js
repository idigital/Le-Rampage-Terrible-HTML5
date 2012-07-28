function Sprite(filename, width, height)
{
  this.m_filename = filename;

  this.m_image = new Image();
  this.m_image.src = filename;

  this.m_width = width;
  this.m_height = height;
};

Sprite.prototype.Draw = function(context, x, y)
{
  context.drawImage(this.m_image, x, y);
};


