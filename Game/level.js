function Level()
{
  //Dragging variables.
  var m_dragging = false;
  var m_startX = 0;
  var m_startY = 0;
  var m_endX = 0;
  var m_endY = 0;
  var m_diffX = 0;
  var m_diffY = 0;
  var m_maxPower = 100;
  var m_power = 0;

  //Objects in the game.
  var m_character;
  var m_aim;
  var m_building;

  var m_objective;

  var m_physics = new PhysicsHandler();
  var m_damage = new DamageHandler();
  
  m_character = new Player(m_damage);
  m_character.SetDimensions(103, 128);
  m_character.EnablePhysics(m_physics, false);
  m_character.Move(0, 472);

  var bg = new Sprite("images/SkyBackground.png", 800, 600);
  
  var m_aimPos = new Vector(0, 0);
  var m_aimSprite = new Sprite("images/Aim.png", 4, 4);

  m_building = new Building(m_physics, 380, 600 - 192);
  m_building.Load("levels/level1.xml");

  //Side-scrolling variables.
  var m_screenX = 0;
  var m_screenY = 0;
  var m_scale = 1.0;
  
  //Scoring variables.
  var m_timeElapsed = 0;
  var m_damageScore = 0;

  this.Update = function(dt, mouseX, mouseY, leftClick, leftRelease)
  {
    m_timeElapsed += dt;
	
    if(leftClick == true)
    {
      this.MouseClick(mouseX, mouseY);
    }

    if(leftRelease == true)
    {
      this.MouseRelease(mouseX, mouseY);
    }

    //Respond to mouse movement.
    this.MouseMove(mouseX, mouseY);

    m_character.Update(dt);

    //If not dragging, set aim sprite at players origin.
    if(m_dragging == false)
    {
      var _charOrigin = m_character.GetOrigin();
      m_aimPos.m_dx = _charOrigin.m_dx - 2;
      m_aimPos.m_dy = _charOrigin.m_dy - 2;
	  m_power = 0;
    }

    m_physics.UpdatePhysics();
	
    m_building.Update(dt);

    m_damage.Update(dt);

    m_screenX = m_character.m_x - 50;
    m_screenY = m_character.m_y - 422;
  }

  this.Draw = function(context)
  {
    bg.Draw(context, 0, 0, m_screenX, m_screenY, m_scale);
    m_building.Draw(context, m_screenX, m_screenY, m_scale);
    m_damage.Draw(context, m_screenX, m_screenY, m_scale);
    m_character.Draw(context, m_screenX, m_screenY, m_scale);
    m_aimSprite.Draw(context, m_aimPos.m_dx, m_aimPos.m_dy,
                     m_screenX, m_screenY, m_scale);

    context.fillStyle = "Black";
    context.fillText("Power: " + m_power, 10, 50);
    context.fillText("Time Score:: " + m_timeElapsed.toFixed(2), 10, 70);
    context.fillText("Damage Score:: " + m_damageScore, 10, 90);
}


  this.MouseClick = function(mouseX, mouseY)
  {
    var _bounds = m_character.GetBounds();

    if(_bounds.CheckForPointCollision(mouseX + m_screenX,
                                      mouseY + m_screenY))
    {
      m_dragging = true;
      m_startX = mouseX + m_screenX;
      m_startY = mouseY + m_screenY;
    } 
  }

  this.MouseRelease = function(mouseX, mouseY)
  {
    if(m_dragging == true)
    {
      m_dragging = false;

      m_character.Jump(m_diffX / 10, m_diffY / 10);
    }
  }

  this.MouseMove = function(mouseX, mouseY)
  {
    if(m_dragging == true)
    {
      m_endX = mouseX + m_screenX;
      m_endY = mouseY + m_screenY;

      var _origin = m_character.GetOrigin();

      m_diffX = _origin.m_dx - m_endX;
      m_diffY = _origin.m_dy - m_endY;

      //Calculate power and cap at max power.
      m_power = Math.sqrt((m_diffX * m_diffX) + (m_diffY * m_diffY));

      if(m_power > m_maxPower)
      {
        //Get aim angle and cap power at max power.
        var _radians = Math.atan2(m_diffY, m_diffX);
        m_power = m_maxPower;

        //Get new x and y values.
        m_diffX = m_maxPower * Math.cos(_radians);
        m_diffY = m_maxPower * Math.sin(_radians);
      }

      //Half power to make jumps less high.
      m_power /= 2;

      m_aimPos.m_dx = _origin.m_dx + m_diffX;
      m_aimPos.m_dy = _origin.m_dy + m_diffY;
    }
  }
};

