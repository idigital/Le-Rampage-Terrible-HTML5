ScoreObjectType = { WALL : "wallScoreType",
                    FLOOR : "floorScoreType",
                    BUILDING_NORMAL : "buildingNormalScoreType",
                    BUILDING_BRONZE : "buildingBronzeScoreType",
                    BUILDING_SILVER : "buildingSilverScoreType",
                    BUILDING_GOLD : "buildingGoldScoreType" };

//*****************************************************************************
//
//*****************************************************************************
function ScoreChainLink(scoreObjectType, pointsValue, currentMultiplier)
{
  this.m_scoreObjectType = scoreObjectType;
  this.m_pointsValue = pointsValue;
  this.m_currentMultiplier = currentMultiplier;
};

