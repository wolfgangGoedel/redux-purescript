module App.State where

import Prelude ((+), (-))
import App.Actions (Action(..))
import App.Model (State)

rootReducer :: Action -> State -> State
rootReducer Initial _ = { message: "Hello World", count: 0 }
rootReducer (Increment x) s = s { count = s.count + x }
rootReducer (Decrement x) s = s { count = s.count - x }
