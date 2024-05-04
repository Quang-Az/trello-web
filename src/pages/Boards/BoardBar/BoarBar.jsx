import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { capitalizeFirstLetter } from '~/utilities/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: '  flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflow: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        '&::-webkit-scrollbar-track': { m: 2 }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label={board.title}
          //clickable
          onclick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          //clickable
          onclick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          //clickable
          onclick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          //clickable
          onclick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          //clickable
          onclick={() => {}}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddAltIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="Quang">
            <Avatar
              alt="Quang"
              src="https://www.upwork.com/profile-portraits/c1KZaai22g89s9EqCJLdPA953OU9nnol9LvtqActsJ4_hultXpjxX9CuDchkIJ8n6C"
            />
          </Tooltip>
          <Tooltip title="Quang">
            <Avatar
              alt="Quang"
              src="https://toigingiuvedep.vn/wp-content/uploads/2022/05/anh-gai-xinh-deo-kinh-2k7.jpg"
            />
          </Tooltip>
          <Tooltip title="Quang">
            <Avatar alt="Quang" src="https://th.bing.com/th/id/OIP.9F-3w9sVCDc05rZ1Z2bMTgHaJQ?rs=1&pid=ImgDetMain" />
          </Tooltip>
          <Tooltip title="Quang">
            <Avatar alt="Quang" src="https://kenh14cdn.com/2017/img-0191-1500372920465.jpg" />
          </Tooltip>
          <Tooltip title="Quang">
            <Avatar
              alt="Quang"
              src="https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-2k-de-thuong-cute.jpg"
            />
          </Tooltip>
          <Tooltip title="Quang">
            <Avatar
              alt="Quang"
              src="https://www.upwork.com/profile-portraits/c1KZaai22g89s9EqCJLdPA953OU9nnol9LvtqActsJ4_hultXpjxX9CuDchkIJ8n6C"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
