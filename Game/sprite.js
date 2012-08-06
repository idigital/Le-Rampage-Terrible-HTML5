function Sprite(filename, width, height)
{
  this.m_filename = filename;

  this.m_image = new Image();
  this.m_image.src = filename;

  this.m_width = width;
  this.m_height = height;
  
  this.m_visible = true;
};

Sprite.prototype.Draw = function(context, x, y, screenX, screenY, scale)
{
  if(this.m_visible == true)
  {
    var _scaledWidth = this.m_width * scale;
    var _scaledHeight = this.m_height * scale;
    var _scaledScreenX = x - screenX;
    var _scaledScreenY = y - screenY;
	
    context.drawImage(this.m_image, 0, 0, this.m_width, this.m_height,
                      _scaledScreenX, _scaledScreenY,
					  _scaledWidth, _scaledHeight);
  }
};


