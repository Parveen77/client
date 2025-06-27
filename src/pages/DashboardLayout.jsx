import { Outlet } from 'react-router-dom'
import { Navbar, BigSidebar, SmallSidebar } from '../components'
import { useState, useContext, createContext } from 'react'
import { checkDefaultTheme } from '../App'

const DashboardContext = createContext()

const Dashboard = () => {
  //temp (for frontend demo only)
  const user = { name: 'Parveen' }

  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme())

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const logoutUser = () => {
    console.log('Logout user')
  }

  return (
    <DashboardContext.Provider //Instead of using props for populating the data in pages we are using dashboardContext.Provide
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = () => useContext(DashboardContext)

export default Dashboard

//css
import styled from 'styled-components'
const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`
