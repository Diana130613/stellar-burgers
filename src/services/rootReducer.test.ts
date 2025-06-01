import { rootReducer } from './store';
import { initialState as burgerAssemblerInitialState } from './slices/burgetAssemblerSlice';
import { initialState as ingredientsInitialState } from './slices/ingredientsSlice';
import { initialState as feedInitialState } from './slices/feedSlice';
import { initialState as orderInitialState } from './slices/orderSlice';
import { initialState as userInitialState } from './slices/userSlice';

describe('rootReducer', () => {
  test('должен возвращать корректное начальное состояние хранилища при вызове rootReducer с undefined-состоянием и экшеном', () => {
    const result = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });
    
    expect(result).toEqual({
      burgerAssembler: burgerAssemblerInitialState,
      ingredients: ingredientsInitialState,
      feeds: feedInitialState,
      order: orderInitialState,
      user: userInitialState
    });
  });
});