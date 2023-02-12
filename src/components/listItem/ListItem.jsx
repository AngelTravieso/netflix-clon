import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

import "./listItem.scss";

const ListItem = () => {
  return (
    <div className="listItem">
        <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt="Image Movie"
      />

      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon />
          <AddIcon />
          <ThumbUpOutlinedIcon />
          <ThumbDownOffAltOutlinedIcon />
        </div>
      </div>

    </div>
  )
}

export default ListItem