import {
  Content,
  ContainerCard,
  TeamBox,
  Footer,
  HomeContainer,
  StyledMuiColorInput,
} from './style'

import { useCallback, useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import { Card } from '../../components/card'
import { Header } from '../../components/header'
import { FormField } from '../../components/formField'
import { Title } from '../../components/title'

import {
  TeamHighlightColorDefault,
  backgroundTeamsColorsDefault,
} from '../../styles/themes/teamsColors'

import addCard from '../../assets/icons/addCard.png'
import footer from '../../assets/images/footer.png'

export function Home() {
  const [collaborators, setCollaborators] = useState(() => {
    const storedData = localStorage.getItem('organo-collaboratorData')
    return storedData ? JSON.parse(storedData) : []
  })

  const [backgroundTeamsColors, setBackgroundTeamsColors] = useState(() => {
    const storedData = localStorage.getItem('organo-backgroundTeamsColorData')
    return storedData ? JSON.parse(storedData) : {}
  })

  const [teamHighlightColor, setTeamHighlightColor] = useState(() => {
    const storedData = localStorage.getItem('organo-teamHighlightColorData')
    return storedData ? JSON.parse(storedData) : {}
  })

  const [collaboratorsByTeam, setCollaboratorsByTeam] = useState({})

  const [toggleFormScreen, setToggleFormScreen] = useState(false)

  const handleDataCollaborator = (formData) => {
    const newId = new Date().getTime()

    const collaborator = {
      id: newId,
      ...formData,
    }

    setCollaborators((prevState) => [...prevState, collaborator])
  }

  const handleClickAddCardCollaborator = () => {
    setToggleFormScreen((prevState) => !prevState)
  }

  const handleLikeButton = useCallback((collaboratorId, like) => {
    setCollaborators((prevCollaborators) =>
      prevCollaborators.map((collaborator) =>
        collaborator.id === collaboratorId
          ? { ...collaborator, like }
          : collaborator,
      ),
    )
  }, [])

  const handleDeleteButton = (collaboratorId) => {
    setCollaborators((prevCollaborators) => {
      return prevCollaborators.filter(
        (collaborator) => collaborator.id !== collaboratorId,
      )
    })
  }

  const handleTeamColorInput = (color, team) => {
    const storedData = JSON.parse(
      localStorage.getItem('organo-backgroundTeamsColorData'),
    )

    storedData[color] = team
    setBackgroundTeamsColors(storedData)
  }

  const handleHighlightTeamColorInput = (color, team) => {
    const storedData = JSON.parse(
      localStorage.getItem('organo-teamHighlightColorData'),
    )

    storedData[color] = team
    setTeamHighlightColor(storedData)
  }

  useEffect(() => {
    localStorage.setItem(
      'organo-collaboratorData',
      JSON.stringify(collaborators),
    )

    const groupedByTeam = collaborators.reduce((acc, collaborator) => {
      const { team } = collaborator
      if (!acc[team]) {
        acc[team] = []
      }
      acc[team].push(collaborator)
      return acc
    }, {})

    setCollaboratorsByTeam(groupedByTeam)
  }, [collaborators])

  useEffect(() => {
    if (Object.keys(backgroundTeamsColors).length === 0) {
      localStorage.setItem(
        'organo-backgroundTeamsColorData',
        JSON.stringify(backgroundTeamsColorsDefault),
      )
      setBackgroundTeamsColors(backgroundTeamsColorsDefault)
    } else {
      localStorage.setItem(
        'organo-backgroundTeamsColorData',
        JSON.stringify(backgroundTeamsColors),
      )
    }
  }, [backgroundTeamsColors])

  useEffect(() => {
    if (Object.keys(teamHighlightColor).length === 0) {
      localStorage.setItem(
        'organo-teamHighlightColorData',
        JSON.stringify(TeamHighlightColorDefault),
      )
      setTeamHighlightColor(TeamHighlightColorDefault)
    } else {
      localStorage.setItem(
        'organo-teamHighlightColorData',
        JSON.stringify(teamHighlightColor),
      )
    }
  }, [teamHighlightColor])

  return (
    <HomeContainer>
      <Header />

      <main>
        <Content>
          <FormField
            formDataToRegisterCollaborator={handleDataCollaborator}
            toggleFormScreen={toggleFormScreen}
          />
        </Content>

        <ContainerCard>
          <div className="title-container-card">
            <div>
              <h2>Minha Organização:</h2>

              <button type="button" onClick={handleClickAddCardCollaborator}>
                <figure title="Adicionar Colaborador">
                  <img src={addCard} alt="Adicionar Colaborador" />
                </figure>
              </button>
            </div>
          </div>

          {Object.entries(collaboratorsByTeam).map(([team, teamMembers]) => {
            const highlight = teamHighlightColor[team] || ''
            const background = backgroundTeamsColors[team] || ''

            return (
              <TeamBox
                key={team}
                $background={background}
                $highlight={highlight}
              >
                <div className="color-box">
                  <div>
                    <p>Alterar cor de fundo</p>
                    <StyledMuiColorInput
                      value={background}
                      onChange={(color) => handleTeamColorInput(team, color)}
                      title="Altere a cor de fundo"
                    />
                  </div>

                  <div>
                    <p>Alterar cor do cartão</p>
                    <StyledMuiColorInput
                      value={highlight}
                      onChange={(color) =>
                        handleHighlightTeamColorInput(team, color)
                      }
                      title="Altere a cor do cartão"
                    />
                  </div>
                </div>

                <Title name={team} background={highlight} />

                <div className="box-card">
                  <Swiper
                    spaceBetween={24}
                    centeredSlides={false}
                    slidesPerView={1}
                    autoplay={false}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={false}
                    breakpoints={{
                      330: {
                        slidesPerView: 1,
                      },
                      430: {
                        slidesPerView: 2,
                      },
                      630: {
                        slidesPerView: 3,
                      },
                      930: {
                        slidesPerView: 4,
                      },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {teamMembers.map((member) => (
                      <SwiperSlide key={member.id}>
                        <Card
                          data={member}
                          highlightColor={highlight}
                          handleLikeButton={handleLikeButton}
                          handleDeleteButton={handleDeleteButton}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </TeamBox>
            )
          })}
        </ContainerCard>
      </main>

      <Footer>
        <figure>
          <img src={footer} alt="Footer" />
        </figure>
      </Footer>
    </HomeContainer>
  )
}
