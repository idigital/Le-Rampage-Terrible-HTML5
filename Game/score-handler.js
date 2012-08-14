//****************************************************************************
//This file is subject to the terms and conditions defined in license.txt.
//****************************************************************************

//*****************************************************************************
//
//*****************************************************************************
function ScoreHandler()
{
  //***************************************************************************
  //Constants.
  //***************************************************************************

  //Scores for objects.  
  ScoreHandler.WALL_SECTION_POINTS = 1;
  ScoreHandler.FLOOR_SECTION_POINTS = 2;
  ScoreHandler.BRONZE_BUILDING_POINTS = 5;
  ScoreHandler.SILVER_BUILDING_POINTS = 10;
  ScoreHandler.GOLD_BUILDING_POINTS = 20;
  
  //***
  //
  //***
  this.m_currentScore = 0;
  this.m_highScore = 0;

  //An array to hold the 
  this.m_chainActive = false;
  this.m_scoreChain = new Array();
  this.m_currentChainScore = 0;
  this.m_currentMultiplier = 1;
  this.m_multiplierCooldownMax = 0.5;
  this.m_currentCooldown = 0;

  //***************************************************************************
  //
  //***************************************************************************
  this.StartChain = function()
  {
    this.m_chainActive = true;
    this.m_scoreChain = [];

    this.m_currentChainScore = 0;
    this.m_currentMultiplier = 1;

    this.ResetCooldown();
  }

  //***************************************************************************
  //
  //***************************************************************************
  this.AddChainLink = function(scoreObjectType, objectScore)
  {
    if(this.m_chainActive == false)
    {
      this.StartChain();
    }

    var _chainLink = new ScoreChainLink(scoreObjectType, objectScore,
                                        this.m_currentMultiplier);

    this.m_scoreChain.push(_chainLink);

    this.ResetCooldown();
    this.m_currentMultiplier++;
  }

  //***************************************************************************
  //
  //***************************************************************************
  this.GetChainScore = function()
  {
    if(this.m_chainActive == true)
    {
      var _score = 0;

      //Make a copy of the chain.
      var _copy = new Array(this.m_scoreChain.length);
      for(i = 0; i < this.m_scoreChain.length; i++)
      {
        _copy[i] = this.m_scoreChain[i];
      }

      //Sum up chain score.
      while(_copy.length > 0)
      {
        //Get score of first chain link.
        _score += (_copy[0].m_pointsValue
                   * _copy[0].m_currentMultiplier);

        //Remove first chain link from array.
        _copy.splice(0, 1);
      }

      return _score;
    }
    else
    {
      return 0;
    }
  }

  //***************************************************************************
  //
  //***************************************************************************
  this.EndChain = function()
  {
    this.m_currentChainScore = this.GetChainScore();

    this.m_currentScore += this.m_currentChainScore;

    this.m_currentChainScore = 0;

    this.m_chainActive = false;

    this.m_scoreChain = [];
  }

  //***************************************************************************
  //
  //***************************************************************************
  this.ResetCooldown = function()
  {
    this.m_currentCooldown = this.m_multiplierCooldownMax;
  }

  //***************************************************************************
  //
  //***************************************************************************
  this.Update = function(dt)
  {
    if(this.m_chainActive == true)
    {
      if(this.m_currentCooldown > 0)
      {
        this.m_currentCooldown -= dt;
      
        //Update.
        this.m_currentChainScore = this.GetChainScore();
      }
      else if (this.m_currentCooldown <= 0 && this.m_currentChainScore > 0)
      {
        this.EndChain();
      }
    }
  }

  this.Draw = function(context, x, y)
  {
    for(chainLink = 0; chainLink < this.m_scoreChain.length; chainLink++)
    {
      var _objectType = this.m_scoreChain[chainLink].m_scoreObjectType;
      var _points = this.m_scoreChain[chainLink].m_pointsValue;
      var _multiplier = this.m_scoreChain[chainLink].m_currentMultiplier;

      context.fillStyle = "Red";
      context.fillText("Damage: " + _objectType + ", " + _points + " x" + _multiplier, x, y + (20* chainLink));
    }
  }
};

