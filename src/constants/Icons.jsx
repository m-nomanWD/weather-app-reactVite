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
export function FeelsLike() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <path d='M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z' />
    </svg>
  )
}
export function Wind() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <path d='M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2' />
    </svg>
  )
}
export function ArrowUp() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <line x1='12' x2='12' y1='19' y2='5' />
      <polyline points='5 12 12 5 19 12' />
    </svg>
  )
}
export function ArrowDown() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <line x1='12' x2='12' y1='5' y2='19' />
      <polyline points='19 12 12 19 5 12' />
    </svg>
  )
}
export function SunRise() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <path d='M17 18a5 5 0 0 0-10 0' />
      <line x1='12' x2='12' y1='2' y2='9' />
      <line x1='4.22' x2='5.64' y1='10.22' y2='11.64' />
      <line x1='1' x2='3' y1='18' y2='18' />
      <line x1='21' x2='23' y1='18' y2='18' />
      <line x1='18.36' x2='19.78' y1='11.64' y2='10.22' />
      <line x1='23' x2='1' y1='22' y2='22' />
      <polyline points='8 6 12 2 16 6' />
    </svg>
  )
}
export function SunSet() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <path d='M17 18a5 5 0 0 0-10 0' />
      <line x1='12' x2='12' y1='9' y2='2' />
      <line x1='4.22' x2='5.64' y1='10.22' y2='11.64' />
      <line x1='1' x2='3' y1='18' y2='18' />
      <line x1='21' x2='23' y1='18' y2='18' />
      <line x1='18.36' x2='19.78' y1='11.64' y2='10.22' />
      <line x1='23' x2='1' y1='22' y2='22' />
      <polyline points='16 5 12 9 8 5' />
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
      stroke-width='1.25'
      stroke='currentColor'
      class='w-6 h-6'
      onClick={handleClick}
      color='white'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>
  )
}
export function ClearSky() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
    >
      <path d='M396-396q-32-32-58.5-67T289-537q-5 14-6.5 28.5T281-480q0 83 58 141t141 58q14 0 28.5-2t28.5-6q-39-22-74-48.5T396-396Zm57-56q51 51 114 87.5T702-308q-40 51-98 79.5T481-200q-117 0-198.5-81.5T201-480q0-65 28.5-123t79.5-98q20 72 56.5 135T453-452Zm290 72q-20-5-39.5-11T665-405q8-18 11.5-36.5T680-480q0-83-58.5-141.5T480-680q-20 0-38.5 3.5T405-665q-8-19-13.5-38T381-742q24-9 49-13.5t51-4.5q117 0 198.5 81.5T761-480q0 26-4.5 51T743-380ZM440-840v-120h80v120h-80Zm0 840v-120h80V0h-80Zm323-706-57-57 85-84 57 56-85 85ZM169-113l-57-56 85-85 57 57-85 84Zm671-327v-80h120v80H840ZM0-440v-80h120v80H0Zm791 328-85-85 57-57 84 85-56 57ZM197-706l-84-85 56-57 85 85-57 57Zm199 310Z' />
    </svg>
  )
}
export function Moon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
    </svg>
  )
}
export function Sun() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <circle cx='12' cy='12' r='5' />
      <line x1='12' x2='12' y1='1' y2='3' />
      <line x1='12' x2='12' y1='21' y2='23' />
      <line x1='4.22' x2='5.64' y1='4.22' y2='5.64' />
      <line x1='18.36' x2='19.78' y1='18.36' y2='19.78' />
      <line x1='1' x2='3' y1='12' y2='12' />
      <line x1='21' x2='23' y1='12' y2='12' />
      <line x1='4.22' x2='5.64' y1='19.78' y2='18.36' />
      <line x1='18.36' x2='19.78' y1='5.64' y2='4.22' />
    </svg>
  )
}
export function Cloud() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <path d='M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z' />
    </svg>
  )
}
export function PaperAirplain() {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      stroke-width='1.5'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
      ></path>
    </svg>
  )
}
export function FewCloudDay() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
    >
      <path d='M440-760v-160h80v160h-80Zm266 110-56-56 113-114 56 57-113 113Zm54 210v-80h160v80H760Zm3 299L650-254l56-56 114 112-57 57ZM254-650 141-763l57-57 112 114-56 56Zm-14 450h180q25 0 42.5-17.5T480-260q0-25-17-42.5T421-320h-51l-20-48q-14-33-44-52.5T240-440q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T40-320q0-83 58.5-141.5T240-520q60 0 109.5 32.5T423-400q58 0 97.5 43T560-254q-2 57-42.5 95.5T420-120H240Zm320-134q-5-20-10-39t-10-39q45-19 72.5-59t27.5-89q0-66-47-113t-113-47q-60 0-105 39t-53 99q-20-5-41-9t-41-9q14-88 82.5-144T480-720q100 0 170 70t70 170q0 77-44 138.5T560-254Zm-79-226Z' />
    </svg>
  )
}
export function FewCloudNight() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
    >
      <path d='M504-425Zm20 385H420l20-12.5q20-12.5 43.5-28t43.5-28l20-12.5q81-6 149.5-49T805-285q-86-8-163-43.5T504-425q-61-61-97-138t-43-163q-77 43-120.5 118.5T200-444v12l-12 5.5q-12 5.5-26.5 11.5T135-403.5l-12 5.5q-2-11-2.5-23t-.5-23q0-146 93-257.5T450-840q-18 99 11 193.5T561-481q71 71 165.5 100T920-370q-26 144-138 237T524-40Zm-284-80h180q25 0 42.5-17.5T480-180q0-25-17-42.5T422-240h-52l-20-48q-14-33-44-52.5T240-360q-50 0-85 34.5T120-240q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T40-240q0-83 58.5-141.5T240-440q60 0 109.5 32.5T423-320q57 2 97 42.5t40 97.5q0 58-41 99t-99 41H240Z' />
    </svg>
  )
}
export function Thunder() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <path d='M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9' />
      <polyline points='13 11 9 17 15 17 11 23' />
    </svg>
  )
}
export function Snow() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <path d='M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25' />
      <line x1='8' x2='8.01' y1='16' y2='16' />
      <line x1='8' x2='8.01' y1='20' y2='20' />
      <line x1='12' x2='12.01' y1='18' y2='18' />
      <line x1='12' x2='12.01' y1='22' y2='22' />
      <line x1='16' x2='16.01' y1='16' y2='16' />
      <line x1='16' x2='16.01' y1='20' y2='20' />
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
export function Rainy() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      class='main-grid-item-icon'
      fill='none'
      stroke='currentColor'
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2'
    >
      <line x1='16' x2='16' y1='13' y2='21' />
      <line x1='8' x2='8' y1='13' y2='21' />
      <line x1='12' x2='12' y1='15' y2='23' />
      <path d='M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25' />
    </svg>
  )
}
