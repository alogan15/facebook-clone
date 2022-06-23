import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography} from "@mui/material";
import { orange } from '@mui/material/colors';

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      {/* Card 1 */}
      <CardHeader
        sx={{ margin: 5 }}
        avatar={
          <Avatar
              
              sx={{ width: 30, height: 30, bgcolor:orange[500] }}
            >
              JL
            </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Jeff Lawrence"
        subheader="June 21, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        img src={require('/Users/andrelogan/dev/facebook-clone/facebookclone/src/images/jeff.jpg')}
        alt="biking"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Nothing like a morning ride!!!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
          <Typography>115</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>

        {/* Card 2 */}
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 30, height: 30, bgcolor:orange[500]  }}
            >
              KS
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Kalyn Smith"
          subheader="June 21, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          img src={require('/Users/andrelogan/dev/facebook-clone/facebookclone/src/images/kalyn.jpg')}
          alt="miami"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            I LOVE MIAMIIIIIIII #YOLO
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
            <Typography>178</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>

          {/* Card 3 */}
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 30, height: 30, bgcolor:orange[500]  }}
            >
              JT
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Jammers"
          subheader="June 21, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          img src={require('/Users/andrelogan/dev/facebook-clone/facebookclone/src/images/jammers.jpg')}
          alt="codediff"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            I eat, sleep, and breathe Code Differently!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
            <Typography>302</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          </CardActions>

          {/* Card 4 */}
          <CardHeader
          avatar={
            <Avatar
              sx={{ width: 30, height: 30, bgcolor:orange[500]  }}
            >
              JS
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Jay Springer"
          subheader="June 21, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          img src={require('/Users/andrelogan/dev/facebook-clone/facebookclone/src/images/jayspring.jpg')}
          alt="jay"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            "Hey lil momma, snap this pic"
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
            <Typography>102</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          </CardActions>

          {/* Card 5 */}
          <CardHeader
          avatar={
            <Avatar
              sx={{ width: 30, height: 30, bgcolor:orange[500]  }}
            >
              JE
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Jordan Eldrige"
          subheader="June 21, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          img src={require('/Users/andrelogan/dev/facebook-clone/facebookclone/src/images/jordan.jpg')}
          alt="sixers"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            LETS GO SIXERSSSSSSSS!!!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
            <Typography>231</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          </CardActions>

          {/* Card 6 */}
          <CardHeader
          avatar={
            <Avatar
              sx={{ width: 30, height: 30, bgcolor:orange[500]  }}
              img src={require('/Users/andrelogan/dev/facebook-clone/facebookclone/src/images/studyDre.jpg')}
            />
            
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Andre Logan"
          subheader="June 21, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          img src={require('/Users/andrelogan/dev/facebook-clone/facebookclone/src/images/bullseye.jpg')}
          alt="bullseye"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Bullseye!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
            <Typography>77</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          </CardActions>
      </Card>
  );
};

export default Post;