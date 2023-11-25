import { useDispatch } from 'react-redux'

export default function Clock() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
}
export function PlusButton({ onClickAction }) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(onClickAction)
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      class='w-6 h-6'
      style={{
        cursor: 'pointer',
        backgroundColor: 'yellow',
        borderRadius: '4px',
      }}
      onClick={handleClick}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>
  )
}
export function SearchIcon({ onClickAction }) {
  const dispatch = useDispatch()
  const handleSearch = () => {
    dispatch(onClickAction)
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      class='w-6 h-6'
      style={{ cursor: 'pointer' }}
      onClick={handleSearch}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
      />
    </svg>
  )
}
