import React from 'react';
import { render } from '@testing-library/react';
import Pagination from '../Pagination';

const Component = <Pagination currentPage={2} totalPages={4} onPageChange={() => {}} />;

describe('Pagination component', () => {
  it('displays pages', () => {
    const { getByText } = render(Component);
    getByText('1_');
    getByText('2_');
    getByText('3_');
    getByText('4');
  });

  it('displays both page controllers', () => {
    const { getByText } = render(Component);
    getByText(/previous/i);
    getByText(/next/i);
  });
});
