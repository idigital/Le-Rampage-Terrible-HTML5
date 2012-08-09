//****************************************************************************
//
//****************************************************************************
function UI()
{
  //***********
  //UI Sprites.
  //***********
  
  //Ingame.
  this.m_ingameNumbers = new AnimatedSprite("images/ui/Ui-Game-Numbers.png", null, 36, 69, 10);
  this.m_ingameScore = new Sprite("images/ui/Ui-Game-Score.png", 123, 71);
  this.m_ingameScorePos = new Vector(0, 0);
  this.m_ingameTime = new Sprite("images/ui/Ui-Game-Time.png", 98, 79);
  this.m_ingameTimePos = new Vector(0, 71);
  this.m_ingameMultiplier = new Sprite("images/ui/Ui-Game-Multiplyerx.png", 226, 72);
  this.m_ingameMultiplierPos = new Vector(0, 143);
  this.m_ingamePower = new Sprite("images/ui/Ui-Game-Power.png", 133, 73);
  this.m_ingamePowerPos = new Vector(0, 216);
  
  //End game.
  this.m_endgameNumbers = new AnimatedSprite("images/ui/Ui-End-Numbers.png", null, 49, 101, 10);
  this.m_endgameScore = new Sprite("images/ui/Ui-End-Score.png", 160, 90);
  this.m_endgameTime = new Sprite("images/ui/Ui-End-Time.png", 105, 90);
  
  //Current properties.
  this.m_score = 0;
  this.m_time = 0;
  this.m_multiplier = 0;
  this.m_power = 0;

  //**************************************************************************
  //
  //**************************************************************************
  this.Update = function(dt, score, time, multiplier, power)
  {
    this.m_score = score;
    this.m_time = time;
    this.m_multiplier = multiplier;
    this.m_power = power;
  }

  //**************************************************************************
  //
  //**************************************************************************
  this.Draw = function(context)
  {
    //Draw score.
    this.m_ingameScore.Draw(context,
                            this.m_ingameScorePos.m_dx,
                            this.m_ingameScorePos.m_dy, 0, 0, 1);

	this.DrawNumberSmall(context, this.m_score, 
						 this.m_ingameScorePos.m_dx + this.m_ingameScore.m_width,
                         this.m_ingameScorePos.m_dy);

	//Draw time.
	this.m_ingameTime.Draw(context,
                           this.m_ingameTimePos.m_dx,
                           this.m_ingameTimePos.m_dy, 0, 0, 1);

	this.DrawNumberSmall(context, this.m_time, 
						 this.m_ingameTimePos.m_dx + this.m_ingameTime.m_width,
                         this.m_ingameTimePos.m_dy);

	//Draw multiplier.
	this.m_ingameMultiplier.Draw(context,
                                 this.m_ingameMultiplierPos.m_dx,
                                 this.m_ingameMultiplierPos.m_dy, 0, 0, 1);

	this.DrawNumberSmall(context, this.m_multiplier, 
						 this.m_ingameMultiplierPos.m_dx + this.m_ingameMultiplier.m_width,
                         this.m_ingameMultiplierPos.m_dy);

	//Draw power.
	this.m_ingamePower.Draw(context,
                            this.m_ingamePowerPos.m_dx,
                            this.m_ingamePowerPos.m_dy, 0, 0, 1);
							
	this.DrawNumberSmall(context, this.m_power, 
						 this.m_ingamePowerPos.m_dx + this.m_ingamePower.m_width,
                         this.m_ingamePowerPos.m_dy);
  }

  //**************************************************************************
  //
  //**************************************************************************
  this.DrawNumberSmall = function(context, number, x, y)
  {
    //Find number of digits.
	var _numDigits = 0;
	var _temp = number;
	
	while(_temp > 1)
	{
      _temp /= 10;
      _numDigits++;
	}
	
    for(digit = 0; digit < _numDigits; digit++)
    {
	  var _mod = 10;
	  	  
	  for(multi = 0; multi < digit; multi++)
	  {
	    _mod *= 10;
	  }
	  
	  var _remainder = number % _mod;
	  
	  var _digit = Math.floor(_remainder / 10);
	  
      this.m_ingameNumbers.DrawFrame(context, _digit, x + (this.m_ingameNumbers.m_width * digit), y, 0, 0, 1);
    }
  }

  //**************************************************************************
  //
  //**************************************************************************
  this.DrawNumberLarge = function(context, number, x, y)
  {
    var _frame = 0;
    this.m_endgameNumbers.DrawFrame(context, _frame, x, y, 0, 0, 1);
  }
};
