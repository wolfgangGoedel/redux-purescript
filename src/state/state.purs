module App.State where
    
  type State = {
    message :: String
  }

  data Action
    = Initial
  
  rootReducer :: Action -> State -> State
  rootReducer _ _ = { message: "Hello" }
  -- rootReducer Initial s = s