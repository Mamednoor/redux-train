import React from 'react'
import {
	createRenderer,
} from 'react-test-renderer/shallow'


import Header from './Header'
import MainSection from './MainSection'

import App from './App'

const setup = () => {
	const renderer = createRenderer()
	renderer.render(<App />)
	const output = renderer.getRenderOutput()
	return output
}

describe('components', () => {
	describe('Header', () => {
		it('should render', () => {
			const output = setup()
			const [header] = output.props.children
			expect(header.type).toBe(Header)
		})
	})

	describe('Mainsection', () => {
		it('should render', () => {
			const output = setup()
			const [, mainSection] = output.props.children
			expect(mainSection.type).toBe(MainSection)
		})
	})
})