Objective.prototype = new GameObject();

function Objective(filename, x, y, width, height)
{
  this.m_x = x;
  this.m_y = y;
  this.m_width = width;
  this.m_height = height;

  this.m_type = ObjectType.Finish;

  this.m_image = new Image();
  this.m_image.src = filename;

};

Objective.prototype.Draw = function(context, screenX, screenY, scale)
{
  context.drawImage(this.m_image, this.m_x - screenX, this.m_y - screenY);

  this.m_bounds.Draw(context, screenX, screenY, scale);
};

