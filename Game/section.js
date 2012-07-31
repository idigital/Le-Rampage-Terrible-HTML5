Section.prototype = new GameObject();

function Section(foregroundImage, backgroundImage, x, y)
{
  this.m_foregroundImage = foregroundImage;
  this.m_backgroundImage = backgroundImage;
  this.m_x = x;
  this.m_y = y;

  this.m_type = BlockType.PassableBlock;

  this.Draw = function(context, screenX, screenY)
  {
    this.m_foregroundImage.Draw(context, this.m_x, this.m_y, screenX, screenY);

    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.strokeRect(this.m_x - screenX, this.m_y - screenY,
                       512, 384);
  }
};

