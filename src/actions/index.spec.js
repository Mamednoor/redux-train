import * as types from '../constants/TodoActionTypes'
import * as actions from './todosAction'

// utilisation de la méthode describe qui prend en 1er arg le nom de la catégorie
// en 2nd arg une fonction anonyme
describe('Todo action', () => {
  // déclaration d'un nouveau test avec la méthode it
  // 1er arg nom du test et 2nd arg une fonction anonyme
  it('addTodo should create ADD_TODO actions', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: types.ADD_TODO,
      text: 'Use Redux'
    })
  })
  it('deleteTodo should create DELETE_TODO action', () => {
		expect(actions.deleteTodo(1)).toEqual({
			type: types.DELETE_TODO,
			id: 1,
		})
  })
  it('editTodo should create EDIT_TODO action', () => {
		expect(actions.editTodo(1, 'Use Redux everywhere')).toEqual({
			type: types.EDIT_TODO,
			id: 1,
			text: 'Use Redux everywhere',
		})
	})

	it('completeTodo should create COMPLETE_TODO action', () => {
		expect(actions.completeTodo(1)).toEqual({
			type: types.COMPLETE_TODO,
			id: 1,
		})
	})

	it('completeAll should create COMPLETE_ALL action', () => {
		expect(actions.completeAllTodos()).toEqual({
			type: types.COMPLETE_ALL_TODOS,
		})
	})

	it('clearCompleted should create CLEAR_COMPLETED action', () => {
		expect(actions.clearCompleted()).toEqual({
			type: types.CLEAR_COMPLETED,
		})
	})
})