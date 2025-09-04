import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export interface Recipe {
  title: string;
  description: string;
  image?: string;
}

interface CardsProps {
  recipes: Recipe[];
}

const Cards: React.FC<CardsProps> = ({ recipes }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {recipes.map((recipe, idx) => (
        <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              width: 260,
              height: 340,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
            }}
          >
            {recipe.image && (
              <CardMedia
                component="img"
                image={recipe.image}
                alt={recipe.title}
                sx={{ objectFit: "cover", width: "100%", height: 140 }}
              />
            )}
            <CardContent
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 0,
              }}
            >
              <Typography gutterBottom variant="h6" component="div" noWrap>
                {recipe.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {recipe.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
