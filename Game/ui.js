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
  this.m_ingameTime = new Sprite("images/ui/Ui-Game-Time.png", 98, 79);
  this.m_ingameMultiplier = new Sprite("images/ui/Ui-Game-Multiplyerx.png", 226, 72);
  this.m_ingamePower = new Sprite("images/ui/Ui-Game-Power.png", 133, 73);
  
  //End game.
  this.m_endgameNumbers = new AnimatedSprite("images/ui/Ui-End-Numbers.png", null, 49, 101, 10);
  this.m_endgameScore = new Sprite("images/ui/Ui-End-Score.png", 160, 90);
  this.m_endgameTime = new Sprite("images/ui/Ui-End-Time.png", 105, 90);
};
