import { type FC } from 'react'
import { type MySvgProps } from '../types/svg-type'

export const ArrowDown: FC<MySvgProps> = ({ width, height, fill }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 21 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1.2959 0.922852L0.172852 2.0459L9.93848 11.8115L10.5 12.3486L11.0615 11.8115L20.8271 2.0459L19.7041 0.922852L10.5 10.127L1.2959 0.922852Z'
      fill={fill}
    />
  </svg>
)
