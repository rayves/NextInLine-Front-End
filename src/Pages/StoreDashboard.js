import { AppBar, CssBaseline, Grid, Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CreateAvailability from '../Components/Availability/CreateAvailability';
import NewBarber from '../Components/Barbers/NewBarber';
import AllClients from '../Components/Clients/AllClients';
import NewClient from '../Components/Clients/NewClient';
import NewStore from '../Components/Stores/NewStore'
import TabMenu from '../Components/UniversalComponents/TabMenu';
import MyStore from '../Components/Stores/MyStore'
function StoreDashboard() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const tabs=['add','all']
  return (
<>

    <CssBaseline/>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="My Store" />
          <Tab label="Clients" />
          <Tab label="Barbers" />
          <Tab label="Availability" />
          <Tab label="Hair Styles" />

        </Tabs>
        {selectedTab===0&&<MyStore/>}
        {selectedTab===1&&<NewClient/>}
        {selectedTab===2&&<NewBarber/>}
        {selectedTab===3&&<TabMenu tabs={tabs}/> }
        
      </Box>
</>

    )
}

export default StoreDashboard