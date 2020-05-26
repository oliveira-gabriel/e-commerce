import React from 'react';
import { render } from '@testing-library/react'
import Menu from './menu'


describe('deve renderizar o componente sem erros', () => {

    it('deve renderizar o componente sem erros', () => {
        const { getByText } = render(<Menu />)
        const text = getByText(/Menu/i) 
        expect(text).toBeInTheDocument()
    })

})