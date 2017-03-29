module App.Connect where
  
import Prelude (Unit, id, ($))
import App.Actions (Action(..))
import App.Model (State)

type AppDispatch =
  { increment :: Int -> Unit
  , decrement :: Int -> Unit
  }

connectAppProps :: State -> State
connectAppProps = id

connectAppDispatch :: (Action -> Unit) -> AppDispatch
connectAppDispatch dispatch =
  { increment: \x -> dispatch $ Increment x
  , decrement: \x -> dispatch $ Decrement x
  }
