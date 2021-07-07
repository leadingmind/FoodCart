import { Grid} from "@material-ui/core";
import BuyButtons from "./buybuttons"

import SingleItem from "./singleitem";
export default function Content() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        
        <Grid item xs>
          <SingleItem />
        </Grid>
      </Grid>
      <BuyButtons />
    </div>
  );
}