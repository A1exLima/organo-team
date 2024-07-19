import { forwardRef, useState } from 'react'
import { TeamContainer } from './style'
import { IoMdArrowDropup } from 'react-icons/io'

export const InputTeamSelect = forwardRef(
  ({ listData, label, id, name, ...rest }, ref) => {
    const [selectedTeam, setSelectedTeam] = useState('')

    const handleTeamChange = (event) => {
      setSelectedTeam(event.target.value)
    }

    return (
      <TeamContainer $colorSelect={selectedTeam}>
        <label htmlFor={id}>{label}</label>
        <select
          ref={ref}
          id={id}
          name={name}
          {...rest}
          onChange={handleTeamChange}
        >
          <option value="" disabled>
            Selecione um time
          </option>
          {listData.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
        <div>
          <IoMdArrowDropup />
        </div>
      </TeamContainer>
    )
  },
)

InputTeamSelect.displayName = 'InputTeamSelect'
