function Sprite(filename, x, y, width, height)
{
  this.m_filename = filename;

  this.m_image = new Image();
  this.m_image.src = filename;

  this.m_x = x;
  this.m_y = y;
  this.m_width = width;
  this.m_height = height;


};

Sprite.prototype.Draw = function(context)
{
  context.drawImage(this.m_image, this.m_x, this.m_y);
};

