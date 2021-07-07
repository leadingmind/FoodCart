import {Grid,Paper} from "@material-ui/core";

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
        <Grid item lg={10} sm={12} xs={12}>
          <SingleItem />
        </Grid>
      </Grid>
    </div>
  );
}