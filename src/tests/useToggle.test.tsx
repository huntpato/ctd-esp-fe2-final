import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useToggle from '../hooks/useToggle';

describe('test in hook useToggle', () => {
  describe('when default value is false', () => {
    test('initital state should be false', () => {
      const { result } = renderHook(() => useToggle(false));

      expect(result.current.isOpen).toBeFalsy();
    });

    test('check toggle functionability, isOpen should change value each time', () => {
      const { result } = renderHook(() => useToggle(false));

      act(() => {
        result.current.toggle();
      });

      expect(result.current.isOpen).toBeTruthy();

      act(() => {
        result.current.toggle();
      });

      expect(result.current.isOpen).toBeFalsy();
    });
  });

  describe('when default value is true', () => {
    test('initital state should be true', () => {
      const { result } = renderHook(() => useToggle(true));

      expect(result.current.isOpen).toBeTruthy();
    });

    test('check toggle functionability, isOpen should change value each time', () => {
      const { result } = renderHook(() => useToggle(true));

      act(() => {
        result.current.toggle();
      });

      expect(result.current.isOpen).toBeFalsy();

      act(() => {
        result.current.toggle();
      });

      expect(result.current.isOpen).toBeTruthy();
    });
  });
});
