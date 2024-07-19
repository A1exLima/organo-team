import { Content, ContainerCard, TeamBox, Footer, HomeContainer } from './style'
import { useEffect, useState } from 'react'

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
  TeamHighlightColor,
  backgroundTeamsColors,
} from '../../styles/themes/teamsColors'

import addCard from '../../assets/icons/addCard.png'
import footer from '../../assets/images/footer.png'

export function Home() {
  const [collaborators, setCollaborators] = useState(() => {
    const storedData = localStorage.getItem('organo-collaboratorData')
    return storedData ? JSON.parse(storedData) : []
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
            const highlight = TeamHighlightColor[team] || ''
            const background = backgroundTeamsColors[team] || ''

            return (
              <TeamBox key={team} $background={background}>
                <Title name={team} background={highlight} />

                <div className="box-card">
                  <Swiper
                    spaceBetween={24}
                    centeredSlides={false}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
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
                        <Card data={member} highlightColor={highlight} />
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
